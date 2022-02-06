import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			plugins: [
				WindiCSS(),
				AutoImport({
					resolvers: [
						IconsResolver({
							componentPrefix: "Icon"
						})
					],
					dts: 'src/auto-imports.d.ts',
				}),
				Icons({
					compiler: 'svelte',
					autoInstall: true
				})
			]
		}
	}
};

export default config;
