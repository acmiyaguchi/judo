<script>
  import GalleryImage from "./GalleryImage.svelte";

  export let waza = [];
  console.log(waza);
</script>

<div class="grid-container">
  {#each waza as item}
    <div class="grid-item">
      <b>{item.name.replace(":", " ")}</b>
      <br />
      <i>{item.translated_name.toLowerCase()}</i>
      <GalleryImage waza={item} />
    </div>
  {/each}
</div>

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
