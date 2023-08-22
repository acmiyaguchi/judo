<script>
  import { inview } from "svelte-inview";
  import { staticHostData } from "$lib";

  export let waza = {};
  let isInView;

  function gifName(waza, masked = false) {
    let parent = masked ? "waza-masked-gif" : "waza-gif";
    let path = `data/clips/${parent}/${waza.filename}`;
    return staticHostData(path, true);
  }
</script>

<div
  use:inview={{
    rootMargin: "50px",
    unobserveOnEnter: true,
  }}
  on:inview_change={({ detail }) => (isInView = detail.inView)}
>
  {#if isInView}
    <img src={gifName(waza)} alt={waza.name} />
  {:else}
    <div class="placeholder">
      <i>loading...</i>
    </div>
  {/if}
</div>

<style>
  img {
    width: 100%;
  }
</style>
