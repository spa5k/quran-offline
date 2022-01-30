import react from '@vitejs/plugin-react';
import { promises as fs } from 'fs';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgrPlugin({
			svgrOptions: {},
		}),
		Icons({
			compiler: 'jsx',
			jsx: 'react',
			customCollections: {
				'brand': {
					'logo': () => fs.readFile('./src/images/Logo.svg', 'utf-8'),
				},
			},
		}),
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
					extension: 'jsx',
				}),
			],
		}),
	],
});
