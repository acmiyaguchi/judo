<script>
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  export let data = [];
  export let keys = [];
  export let filteredData = [];
  export let queryTerm = "";
  let threshold = 0.4;

  $: fuse = new Fuse(data, { keys: keys, includeScore: true });

  function handleQueryTerm(queryTerm) {
    if (queryTerm === "") {
      filteredData = data;
      return;
    }
    let result = fuse.search(queryTerm);
    filteredData = result
      .filter((item) => item.score < threshold)
      .map((item) => item.item);
  }
  function handleInput(event) {
    queryTerm = event.target.value.trim();
    handleQueryTerm(queryTerm);
  }

  // simulate trigger of input event
  onMount(() => {
    handleQueryTerm(queryTerm);
  });
</script>

search:
<input type="text" on:input={handleInput} bind:value={queryTerm} />
{#if filteredData.length}
  {filteredData.length} items
{/if}
