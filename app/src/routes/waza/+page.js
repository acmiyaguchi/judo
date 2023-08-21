import { staticHostData } from "$lib";

export async function load({}) {
  let url = staticHostData("data/datasets/waza.json");
  return {
    waza: (await fetch(url)).json(),
  };
}
