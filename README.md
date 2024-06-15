
# Installation

## Step 1

```bash
# Install the module
npm install web-component-framework@latest
```

## Step 2

Import and register Web Components into your `+page.svelte` or `+layout.svelte`.

```ts
  import { onMount } from 'svelte';

  onMount(async () => {
    const { registerCustomElements, HelloWorldElement, IconElement } = await import('web-component-framework');
    registerCustomElements({
      'hello-world-element': HelloWorldElement,
      'app-icon': IconElement
    });
  });
```

## Step 3

Add this line to your `app.d.ts` in your Svelte-App to get rid of HTML-Attribute-Errors in your IDE.

```ts
// Reference the custom JSX types
/// <reference path="../node_modules/web-component-framework/dist/custom-jsx.d.ts" />
```

## Step 4

Include Web Components into your HTML.

```html
<hello-world-element app-p-xs="12"></hello-world-element>
<app-icon width="64" height="64" fill="blue">icon-user</app-icon>
```

---

# NPM Package
https://www.npmjs.com/package/web-component-framework

---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
