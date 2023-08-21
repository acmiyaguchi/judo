<script>
  import { inview } from "svelte-inview";
  import { staticHostData } from "$lib";

  export let waza = {};
  let isInView;
  const options = {
    rootMargin: "50px",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => (isInView = detail.inView);

  function gifName(row, masked = false) {
    let category_index = row.category_index.toString().padStart(2, "0");
    let name = `${row.category}_${category_index}_${row.name}`;
    if (masked) {
      return staticHostData(`data/clips-gif-masked/${name}_masked.gif`);
    } else {
      return staticHostData(`data/clips-gif/${name}.gif`);
    }
  }
</script>

<div use:inview={options} on:inview_change={handleChange}>
  {#if isInView}
    <img src={gifName(waza)} alt={waza.name} />
  {:else}
    <div class="placeholder" />
  {/if}
</div>

<style>
  img {
    width: 100%;
  }
</style>
