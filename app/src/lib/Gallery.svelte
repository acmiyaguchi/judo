<script>
  import GalleryElement from "./GalleryElement.svelte";

  export let waza = [];
  export let showMore = false;
</script>

<div class="grid-container">
  {#each waza as item}
    <GalleryElement waza={item} {showMore} />
  {/each}
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
</style>
