<script>
  import { inview } from "svelte-inview";
  import { staticHostData } from "$lib";

  export let waza = {};
  let isInView;
  export let showMore = false;

  function gifName(waza, masked = false) {
    let parent = masked ? "waza-masked-gif" : "waza-gif";
    let path = `data/clips/${parent}/${waza.filename}`;
    return staticHostData(path, true);
  }
</script>

<div class="grid-item">
  {#if waza.description}
    <div class="more">
      <button
        on:click={() => (showMore = !showMore)}
        title={showMore ? "click to show less" : "click to show description"}
      >
        {showMore ? "..." : "?"}
      </button>
    </div>
  {/if}
  <div>
    <a data-sveltekit-reload href="/waza/{waza.name}"
      ><b>{waza.name.replace(":", " ")}</b></a
    >
    <br />
    <i>{waza.translated_name.toLowerCase()}</i>
  </div>
  <div
    use:inview={{
      rootMargin: "50px",
      unobserveOnEnter: true,
    }}
    on:inview_change={({ detail }) => (isInView = detail.inView)}
  >
    {#if isInView}
      {@const alt = `${waza.name} - ${waza.description}`}
      <img src={gifName(waza)} {alt} title={alt} />
    {:else}
      <div class="placeholder">
        <i>loading...</i>
      </div>
    {/if}
  </div>

  {#if showMore && waza.description}
    <div class="description">
      {waza.description}
    </div>
    {#if waza.youtube_link}
      <div class="youtube-link">
        <a href={waza.youtube_link} target="_blank" rel="noopener noreferrer">
          [kodokan video]
        </a>
      </div>
    {/if}
  {/if}
</div>

<style>
  img {
    width: 100%;
  }
  .grid-item {
    text-align: center;
    border: 1px solid #ccc;
  }

  /* make button float at the top right */
  .more {
    float: right;
  }
  /* .description {
    text-align: justify;
  } */
  .youtube-link {
    margin-top: 0.3rem;
  }
</style>
