<script>
  import GalleryElement from "$lib/GalleryElement.svelte";

  export let data;
  // find the name that matches
  let waza = data.waza.find((w) => w.name == data.name);
  $: console.log(waza);
</script>

<h1>{waza.name}</h1>

<div class="container"><GalleryElement {waza} showMore={true} /></div>

<style>
  h1 {
    text-align: center;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
