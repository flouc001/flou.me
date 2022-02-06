<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  import type { HomepageBody } from '../types/endpoints/homepage'

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('/homepage')

    return {
      status: response.status,
      props: {
        content: response.ok && (await response.json())
      }
    }
  }
</script>

<script lang="ts">
  export let content: HomepageBody;
</script>

<h1 class="text-xl">{content.intro}</h1>
