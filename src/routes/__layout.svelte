<script>
  import '../app.css';
  import GoogleAnalytics from '$components/Analytics/google.svelte';
  import Navbar from '$components/Navbar/navbar.svelte';
</script>

<GoogleAnalytics />
<div class="max-w-6xl w-full mx-auto px-6">
  <Navbar />
  <hr class="pb-10 border-black" />
  <div class="px-2">
    <slot />
  </div>
</div>
