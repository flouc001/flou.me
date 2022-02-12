<script>
  import '../app.css';
  import Navbar from '../components/Navbar/navbar.svelte';
</script>

<Navbar />
<div class="flex justify-center pt-2">
  <slot />
</div>
