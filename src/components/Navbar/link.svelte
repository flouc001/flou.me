<script lang="ts">
  import type { NavLink } from './types'

  export let isActive: boolean = false;
  export let link: NavLink;
</script>

<div
  class="flex text-md text-white box-border h-8 items-center border-transparent border-y-2 hover:border-b-blue-500 transition"
  class:border-b-blue-500={isActive}
>
  <a
    href="{link.path}"
    class="px-3"
  >{link.label}</a>
</div>