<script lang="ts">
  import { onMount } from 'svelte';

  onMount(async () => {
    const { registerCustomElements, HelloWorldElement, IconElement } = await import('framework');
    registerCustomElements({ HelloWorldElement, IconElement });
  });
</script>

<h1 app-p-xs="12">Hallo</h1>
<hello-world app-p-xs="12"></hello-world>
<app-icon width="64" height="64" fill="blue">icon-user</app-icon>
