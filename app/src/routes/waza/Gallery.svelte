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
  <ul>
    {#each value as waza}
      <li>
        {waza.name}
        <img src={gifName(waza)} />
      </li>
    {/each}
  </ul>
{/each}
