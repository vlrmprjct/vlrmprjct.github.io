export const profile = `{
    repository(owner: "vlrmprjct", name: "vlrmprjct") {
        object(expression: "HEAD:readme.md") {
            ... on Blob {
                text
            }
        }
    }
}`;

export const about = `{
    repository(owner: "vlrmprjct", name: "vlrmprjct") {
        object(expression: "HEAD:about.md") {
            ... on Blob {
                text
            }
        }
    }
}`;

export const common = `{
    repository(owner: "vlrmprjct", name: "vlrmprjct") {
        object(expression: "HEAD:profile.json") {
            ... on Blob {
                text
            }
        }
    }
}`;
