<script>
  import GalleryElement from "$lib/GalleryElement.svelte";
  import Waza from "../Waza.svelte";

  export let data;
  // find the name that matches
  let waza = data.waza.find((w) => w.name == data.name);
  let queryTerm = waza.name.split("-")[0];
</script>

<h1>{waza.name}</h1>

<div class="container"><GalleryElement {waza} showMore={true} /></div>

<h2>other techniques</h2>

<div class="search">
  <Waza {data} bind:queryTerm disableGallery={true} headingLevel={3} />
</div>

<style>
  h1 {
    text-align: center;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
