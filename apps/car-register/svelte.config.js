import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter()
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true
			}
		}
	}
};

export default config;
