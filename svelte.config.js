import preprocess from 'svelte-preprocess';
// for netlify or any other static hosting
// import adapter from '@sveltejs/adapter-static';
// for vercel hybrid nature
import adapter from '@sveltejs/adapter-vercel';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
