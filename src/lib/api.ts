async function fetchGraphQL(query) {
  return fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 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",
    },
    body: JSON.stringify({ query }),
  })
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
    });
}

export async function getQuery(query) {
  console.log("query: ", query);
  const entries = await fetchGraphQL(query);
  console.log("entries: ", entries);

  return entries;
}
