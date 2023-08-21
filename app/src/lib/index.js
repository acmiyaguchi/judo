import { browser, dev } from "$app/environment";

// get the url to the static host to load images
function staticHostData(path, client = false) {
  let base_url = import.meta.env.VITE_STATIC_HOST;
  if ((browser && dev) || client) {
    base_url = base_url.replace("nginx", "localhost");
  }
  return `${base_url}/${path}`;
}

export { staticHostData };
