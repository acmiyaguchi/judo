<script>
  import { groupBy } from "lodash-es";
  import GalleryImage from "./GalleryImage.svelte";

  export let waza = [];
  // options: category, group
  export let grouping = "category";

  $: groupedWaza = groupBy(waza, `${grouping}_id`);
</script>

{#each Object.entries(groupedWaza) as [key, value]}
  <h2>{value[0][grouping].toLowerCase().replace(" ", "-")}</h2>
  <div class="grid-container">
    {#each value as waza}
      <div class="grid-item">
        <b>{waza.name.replace(":", " ")}</b>
        <br />
        <i>{waza.translated_name.toLowerCase()}</i>
        <GalleryImage {waza} />
      </div>
    {/each}
  </div>
{/each}

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1rem;
  }

  .grid-item {
    text-align: center;
    border: 1px solid #ccc;
  }
</style>
