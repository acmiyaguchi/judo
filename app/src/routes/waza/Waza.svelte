<script>
  import Gallery from "$lib/Gallery.svelte";
  import GroupedGallery from "$lib/GroupedGallery.svelte";
  import SearchBar from "$lib/SearchBar.svelte";
  export let data;
  let filteredData = [];
  let queryTerm = "";
  let grouping = "category";
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
      <input
        type="radio"
        bind:group={grouping}
        value="category"
        id="category"
      />
      <label for="category">Kodokan-IJF</label>
      <input type="radio" bind:group={grouping} value="group" id="group" />
      <label for="name">gokyo-no-waza</label>
    </div>
  {/if}
</div>

{#if queryTerm == ""}
  <GroupedGallery waza={data.waza} {grouping} />
{:else}
  <h2>search results</h2>
  <Gallery waza={filteredData} />
{/if}

<style>
  .option {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
</style>
