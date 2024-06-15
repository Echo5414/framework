<script>
  import { onMount } from 'svelte';

  onMount(async () => {
    const { registerCustomElements, HelloWorldElement, IconElement } = await import('web-component-framework');
    registerCustomElements({
      'hello-world-element': HelloWorldElement,
      'app-icon': IconElement
    });
  });
</script>

<main>
  <h1 app-p-xs="12">Hallo1</h1>
  <hello-world-element app-p-xs="12"></hello-world-element>
  <app-icon width="64" height="64" fill="blue">icon-user</app-icon>
</main>
