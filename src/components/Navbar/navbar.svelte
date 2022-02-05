<script>
  import { page } from '$app/stores'

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' }
  ]
</script>

<nav class="bg-blue-900">
  <div class="relative flex items-center justify-end h-16 px-4 space-x-2">
    {#each navLinks as link}
      {@const isActive = $page.url.pathname === link.path}
      <a
        class="px-3 py-2 text-sm {isActive ? 'text-white' : 'text-blue-300'}"
        href="{link.path}"
      >{link.label}</a>
    {/each}
  </div>
</nav>