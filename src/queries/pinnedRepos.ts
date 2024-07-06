export const pinnedRepos = `{
    user(login: "vlrmprjct") {
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
}`;
