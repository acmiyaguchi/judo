import { browser, dev } from "$app/environment";

// get the url to the static host to load images
function staticHostData(path) {
  let base_url = import.meta.env.VITE_STATIC_HOST;
  if (browser && dev) {
    base_url = base_url.replace("nginx", "localhost");
  }
  return `${base_url}/${path}`;
}

export { staticHostData };
