async function fetchGraphql(query) {
  return fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .catch((err) => {});
}

export async function queryGitub(query) {
  const entries = await fetchGraphql(query);

  return entries;
}
