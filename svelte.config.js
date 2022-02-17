import path from 'path'
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver';
import Inspect from 'vite-plugin-inspect'
import AutoImport from 'unplugin-auto-import/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		vite: {
			resolve: {
				alias: {
				  '~': `${path.resolve(path.resolve(), 'src')}`,
				  '@': `${path.resolve(path.resolve(), 'src')}`,
				},
			  },
			plugins: [
				WindiCSS(),
				// https://github.com/antfu/unplugin-auto-import
				AutoImport({
					resolvers: [
						IconsResolver({
							componentPrefix: "Icon"
						})
					],
					dts: 'src/auto-imports.d.ts',
				}),
				// https://github.com/antfu/unplugin-icons
				Icons({
					compiler: 'svelte',
					autoInstall: true
				}),
				// https://github.com/antfu/vite-plugin-inspect
				Inspect({
					// change this to enable inspect for debugging
					enabled: false,
				  }),
			],
			server: {
				fs: {
					strict:true,
				},
				// host: '0.0.0.0',
				// proxy: {
				// 	'/api': {
				// 		target: "http://laravel.test/api",
				// 		changeOrigin: true,
				// 		rewrite: path => path.replace(/^\/mapi/, ""),
				// 	}
				// }
			}
		}
	}
};

export default config;
