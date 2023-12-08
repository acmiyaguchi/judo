<script>
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  let entries = ["home", "waza", "kata"];

  // analytics event
  $: ga_config = {
    app_name: "judo-notes",
    screen_name: $page.url.pathname,
    page_title: $page.url.pathname,
  };
  $: browser && gtag("event", "page_view", ga_config);
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-43NJXZGJ1M"
  ></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-43NJXZGJ1M");
  </script>
  <meta
    name="keywords"
    content="judo, kodokan judo, judo techniques, judo kata, judo waza, gokyo no waza"
  />
  <meta name="author" content="Anthony Miyaguchi" />
  <meta name="title" property="og:title" content="Judo Notes" />
  <meta
    name="description"
    property="og:description"
    content="My study notes for judo."
  />
</svelte:head>

<main>
  <nav>
    <div>
      {#each entries as entry}
        <a href={entry == "home" ? "/" : `/${entry}`}>[{entry}]</a>
        <span />
      {/each}
    </div>
  </nav>
  <slot />
</main>

<style>
  main {
    margin-top: 1rem;
    padding-bottom: 3rem;
    margin: 0 auto;
    max-width: 992px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  @media (max-width: 992px) {
    main {
      padding: 0 0.5rem;
    }
  }
</style>
