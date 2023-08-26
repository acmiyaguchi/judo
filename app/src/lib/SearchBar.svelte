<script>
  import Fuse from "fuse.js";
  export let data = [];
  export let keys = [];
  export let filteredData = [];
  export let queryTerm = "";
  let threshold = 0.4;

  $: fuse = new Fuse(data, { keys: keys, includeScore: true });

  function handleInput(event) {
    queryTerm = event.target.value.trim();
    if (queryTerm === "") {
      filteredData = data;
      return;
    }
    let result = fuse.search(queryTerm);
    filteredData = result
      .filter((item) => item.score < threshold)
      .map((item) => item.item);
  }
</script>

search:
<input type="text" on:input={handleInput} />
{#if filteredData.length}
  {filteredData.length} items
{/if}
