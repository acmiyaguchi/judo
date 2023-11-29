<script>
  // get name from the parameters
  export let data;
</script>

<svelte:head>
  <meta name="title" property="og:title" content="Judo Notes: {data.name}" />
  <meta
    name="description"
    property="og:description"
    content="Description of {data.name}"
  />
</svelte:head>

<slot />
