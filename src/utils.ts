export function graphQL(query: string) {
  return fetch("http://localhost:4000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data);
}
export function multisplit(string: string, separators: string[]) {
  let parts = [string];

  separators.forEach((separator) => {
    parts = parts.map((part) => part.split(separator)).flat();
  });

  return parts;
}
