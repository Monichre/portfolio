async function fetchGraphQL(query) {
  return fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

export async function getQuery(query) {
  const entries = await fetchGraphQL(query);

  return entries;
}
