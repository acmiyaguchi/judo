export const prerender = true;

export async function load({ fetch }) {
  // from the static directory
  let url = "/datasets/waza.json";
  return {
    waza: (await fetch(url)).json(),
  };
}
