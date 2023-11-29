export const prerender = true;

export async function load({ params, fetch }) {
  // from the static directory
  let url = "/datasets/waza.json";
  return {
    waza: (await fetch(url)).json(),
    name: params.name,
  };
}
