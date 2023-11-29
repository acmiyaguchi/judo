<script>
  import Gallery from "$lib/Gallery.svelte";
  import GroupedGallery from "$lib/GroupedGallery.svelte";
  import SearchBar from "$lib/SearchBar.svelte";
  export let data;

  export let queryTerm = "";
  // category is the kodokan-ijf ordering, group is the gokyo-no-waza ordering
  export let grouping = "group";
  export let showMore = false;
  export let disableGallery = false;
  export let headingLevel = 2;

  let filteredData = [];

  $: showGallery = queryTerm == "" && !disableGallery;
</script>

<!-- radio dial for choosing the ordering -->
<div class="option-container">
  <div class="option">
    <div>
      <SearchBar
        data={data.waza}
        keys={["name", "translated_name"]}
        bind:filteredData
        bind:queryTerm
      />
    </div>
    {#if showGallery}
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
</div>

{#if showGallery}
  <GroupedGallery waza={data.waza} {grouping} {showMore} {headingLevel} />
{:else}
  <svelte:element this={`h${headingLevel}`}>results</svelte:element>
  <Gallery waza={filteredData} {showMore} />
{/if}

<style>
  .option-container {
    display: flex;
    justify-content: center;
  }
  .option {
    border: 1px solid #ccc;
    padding: 0.5rem;
  }
</style>
