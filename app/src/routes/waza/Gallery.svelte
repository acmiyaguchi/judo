<script>
  import { groupBy, sortBy } from "lodash-es";
  import { staticHostData } from "$lib";

  export let waza = [];
  // options: category, group
  export let grouping = "category";

  function gifName(row, masked = false) {
    let category_index = row.category_index.toString().padStart(2, "0");
    let name = `${row.category}_${category_index}_${row.name}`;
    if (masked) {
      return staticHostData(`data/clips-gif-masked/${name}_masked.gif`);
    } else {
      return staticHostData(`data/clips-gif/${name}.gif`);
    }
  }

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
        <img src={gifName(waza)} alt={waza.name} />
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

  .grid-item img {
    width: 100%;
  }
</style>
