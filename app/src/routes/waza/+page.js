export const prerender = true;

export async function load({}) {
  let url = "datasets/waza.json";
  return {
    waza: (await fetch(url)).json(),
  };
}
