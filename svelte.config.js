import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    alias: {
      $lib: 'src/lib',
      'web-component-framework': 'src/lib'
    },
    adapter: adapter()
  }
};

export default config;
