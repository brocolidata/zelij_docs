import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';


const isDev = process.argv.includes('dev');
const base = isDev ? '' : process.env.BASE_PATH;

export default {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// fallback: null, // or 'index.html' if you use SPA-style fallback
			fallback: '404.html',
			precompress: false
		}),
		paths: {
			base
		}
	},
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx']
		})
	],

};
