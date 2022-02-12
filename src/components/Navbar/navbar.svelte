<script lang="ts">
  import { page } from '$app/stores';
  import Link from './link.svelte';
  import type { NavLink } from './types';

  const homeLink: NavLink = {
    label: 'flou.me',
    path: '/'
  };

  const rightLinks: NavLink[] = [{ label: 'about', path: '/about' }];
</script>

<nav class="bg-white">
  <div class="flex justify-between items-center py-6">
    <Link link={homeLink} />
    <div class="flex space-x-2">
      {#each rightLinks as link}
        <Link isActive={$page.url.pathname === link.path} {link} />
      {/each}
    </div>
  </div>
</nav>
