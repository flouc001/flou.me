<script lang="ts">
  import type { NavLink } from './types';

  export let isActive: boolean = false;
  export let link: NavLink;
</script>

<a href={link.path} class="group px-2 py-2">
  <div
    class="border-transparent border-y-2 group-hover:border-b-black transition"
    class:border-b-black={isActive}
  >
    {link.label}
  </div>
</a>
