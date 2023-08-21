<script>
  import Gallery from "./Gallery.svelte";
  export let data;
  let grouping = "category";
</script>

# waza

<!-- radio dial for choosing the ordering -->
<div>
  <input type="radio" bind:group={grouping} value="category" id="category" />
  <label for="category">kodokan/ijf</label>
  <input type="radio" bind:group={grouping} value="group" id="group" />
  <label for="name">gokyo-no-waza</label>
</div>

<Gallery waza={data.waza} grouping={grouping} />
