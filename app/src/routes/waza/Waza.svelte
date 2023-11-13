<script>
  import Gallery from "$lib/Gallery.svelte";
  import GroupedGallery from "$lib/GroupedGallery.svelte";
  import SearchBar from "$lib/SearchBar.svelte";
  export let data;
  let filteredData = [];
  let queryTerm = "";
  // category is the kodokan-ijf ordering, group is the gokyo-no-waza ordering
  let grouping = "group";
  let showMore = false;
</script>

<h2>options</h2>

<!-- radio dial for choosing the ordering -->
<div class="option">
  <div>
    <SearchBar
      data={data.waza}
      keys={["name", "translated_name"]}
      bind:filteredData
      bind:queryTerm
    />
  </div>
  {#if queryTerm == ""}
    <div>
      ordering:
      <input type="radio" bind:group={grouping} value="group" id="group" />
      <label for="group">gokyo-no-waza</label>
      <input
        type="radio"
        bind:group={grouping}
        value="category"
        id="category"
      />
      <label for="category">Kodokan-IJF</label>
    </div>
  {/if}
  <div>
    <input type="checkbox" bind:checked={showMore} id="showMore" />
    <label for="showMore">show descriptions by default</label>
  </div>
</div>

{#if queryTerm == ""}
  <GroupedGallery waza={data.waza} {grouping} {showMore} />
{:else}
  <h2>search results</h2>
  <Gallery waza={filteredData} {showMore} />
{/if}

<style>
  .option {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
</style>
