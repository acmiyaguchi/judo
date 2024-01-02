import { redirect } from "@sveltejs/kit";

export function load() {
  throw redirect(302, "https://short.acmiyaguchi.me/judo-feedback");
}
