import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
    }),
  },
  extensions: [".svelte", ".md"],
  preprocess: mdsvex({
    extensions: [".md"],
  }),
};

export default config;
