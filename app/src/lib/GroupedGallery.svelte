<script>
  import { groupBy } from "lodash-es";
  import Gallery from "./Gallery.svelte";

  export let waza = [];
  export let showMore = false;
  // options: category, group
  export let grouping = "category";
  export let headingLevel = 2;

  $: groupedWaza = groupBy(waza, `${grouping}_id`);
</script>

{#each Object.entries(groupedWaza) as [key, value]}
  <svelte:element this={`h${headingLevel}`}>
    {value[0][grouping].toLowerCase().replace(" ", "-")}
  </svelte:element>
  <Gallery waza={value} {showMore} />
{/each}
