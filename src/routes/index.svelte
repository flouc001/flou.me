<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  import type { HomepageBody } from '$types/endpoints/homepage';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/home');

    return {
      status: response.status,
      props: {
        content: response.ok && (await response.json())
      }
    };
  };
</script>

<script lang="ts">
  export let content: HomepageBody;
</script>

<div class="text-sm">{content.intro}</div>
