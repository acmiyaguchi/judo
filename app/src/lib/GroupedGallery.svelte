<script>
  import { groupBy } from "lodash-es";
  import Gallery from "./Gallery.svelte";

  export let waza = [];
  // options: category, group
  export let grouping = "category";

  $: groupedWaza = groupBy(waza, `${grouping}_id`);
</script>

{#each Object.entries(groupedWaza) as [key, value]}
  <h2>{value[0][grouping].toLowerCase().replace(" ", "-")}</h2>
  <Gallery waza={value} />
{/each}
