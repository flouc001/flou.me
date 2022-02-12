<script>
  import { browser } from '$app/env';

  const trackingId = import.meta.env.VITE_GTAG;

  if (browser) {
    // @ts-expect-error
    window.dataLayer = window?.dataLayer || [];

    function gtag() {
      // @ts-expect-error
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', trackingId);
  }
</script>

<svelte:head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={trackingId}"></script>
</svelte:head>
