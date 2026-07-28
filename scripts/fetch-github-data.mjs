/**
 * Fetches all GitHub content the site renders and writes it to src/data/github.json.
 *
 * Runs at build time (npm `prebuild`), never in the browser — the token stays on the
 * build machine and is never part of the bundle.
 *
 * Token resolution: GIT_TOKEN (repo secret / .env.local) falls back to GITHUB_TOKEN,
 * which Actions provides automatically.
 */
import { writeFileSync, readFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import Env from 'dotenv';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const target = resolve(root, 'src/data/github.json');

Env.config({ path: resolve(root, '.env.local'), override: true });

const OWNER = 'vlrmprjct';
const REPO = 'vlrmprjct';

const queries = {
    pinnedRepos: `{
        user(login: "${OWNER}") {
            pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                    ... on Repository {
                        name
                        description
                        homepageUrl
                        languages(first: 5) {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                        url
                        stargazerCount
                        primaryLanguage {
                            name
                        }
                    }
                }
            }
        }
    }`,
    profile: blob('readme.md'),
    about: blob('about.md'),
    common: blob('profile.json'),
};

function blob(file) {
    return `{
        repository(owner: "${OWNER}", name: "${REPO}") {
            object(expression: "HEAD:${file}") {
                ... on Blob {
                    text
                }
            }
        }
    }`;
}

async function graphql(query, token) {
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query }),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(`HTTP ${response.status} — ${result.message || 'request failed'}`);
    }

    if (result.errors) {
        throw new Error(result.errors.map((error) => error.message).join(', '));
    }

    return result.data;
}

/** Keeps the previous snapshot so a missing token or API hiccup can't break the build. */
function bail(reason) {
    if (existsSync(target)) {
        console.warn(`[github-data] ${reason} — keeping existing src/data/github.json`);
        const stale = JSON.parse(readFileSync(target, 'utf8'));
        console.warn(`[github-data] snapshot is from ${stale.fetchedAt || 'unknown date'}`);
        process.exit(0);
    }

    console.error(`[github-data] ${reason} — and no snapshot exists to fall back on`);
    process.exit(1);
}

const token = process.env.GIT_TOKEN || process.env.GITHUB_TOKEN;

if (!token) {
    bail('no GIT_TOKEN or GITHUB_TOKEN set');
}

try {
    const [pinned, profile, about, common] = await Promise.all([
        graphql(queries.pinnedRepos, token),
        graphql(queries.profile, token),
        graphql(queries.about, token),
        graphql(queries.common, token),
    ]);

    const data = {
        fetchedAt: new Date().toISOString(),
        pinnedRepos: pinned.user.pinnedItems.nodes,
        profile: profile.repository.object.text,
        about: about.repository.object.text,
        common: JSON.parse(common.repository.object.text.replace(/^"(.*)"$/, '$1')),
    };

    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, `${JSON.stringify(data, null, 4)}\n`);

    console.log(`[github-data] wrote src/data/github.json (${data.pinnedRepos.length} pinned repos)`);
} catch (error) {
    bail(error.message);
}
