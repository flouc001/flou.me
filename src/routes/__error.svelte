<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        status,
        message: error.message
      }
    };
  }
</script>

<script>
  export let status;
  export let message;
</script>

<div class="w-full h-full flex justify-center items-center mt-16 flex-col">
  <div>
    <h1 class="text-7xl">{status}</h1>
  </div>
  <div class="mt-4">
    <h2>{message}</h2>
  </div>
</div>
