<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch }) => {
    const response = await fetch('/api/about');

    return {
      status: response.status,
      props: {
        content: response.ok && (await response.json())
      }
    };
  };
</script>

<script lang="ts">
  import type { AboutBody } from '$types/endpoints/about';

  export let content: AboutBody;
</script>

<div class="text-sm">{@html content.main}</div>
