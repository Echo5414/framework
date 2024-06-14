import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

const config = {
  preprocess: sveltePreprocess(),
  kit: {
    alias: {
      $lib: 'src/lib',
      'framework': 'src/lib' // Make sure this matches your Vite config
    },
    adapter: adapter()
  }
};

export default config;
