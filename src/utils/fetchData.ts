export const fetchData = async (query, callback) => {
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.GIT_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        const result = await response.json();
        if (response.ok) {
            callback(result);
        } else {
            throw new Error(result.errors.map(error => error.message).join(', '));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
