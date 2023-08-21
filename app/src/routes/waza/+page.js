import { staticHostData } from "$lib";

export const prerender = true;

export async function load({}) {
  let url = staticHostData("data/datasets/waza.json");
  return {
    waza: (await fetch(url)).json(),
  };
}
