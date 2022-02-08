import react from '@vitejs/plugin-react';
import { promises as fs } from 'fs';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import webfontsPlugin from 'vite-plugin-webfonts';

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
		webfontsPlugin({
			fonts: [{
				family: 'IndoPak',
				variants: [
					{
						weight: 600,
						src: [
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.ttf',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff2',
						],
					},
					{
						weight: 400,
						src: [
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.ttf',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff2',
						],
					},
					,
					{
						weight: 800,
						src: [
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.ttf',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff',
							'fonts/hafs/IndoPak/indopak-nastaleeq-waqf-lazim-v4.woff2',
						],
					},
				],
			}, {
				family: 'meQuran',
				variants: [{
					weight: 800,
					src: [
						'fonts/hafs/meQuran/me_quran-2.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/hafs/meQuran/me_quran-2.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/hafs/meQuran/me_quran-2.woff2',
					],
				}],
			}, {
				family: 'UthmanicHafs',
				variants: [{
					weight: 800,
					src: [
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.ttf',
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.ttf',
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.ttf',
						'fonts/hafs/UthamicHafs/UthmanicHafs1Ver18.woff2',
					],
				}],
			}, {
				family: 'surahnames',
				variants: [{
					weight: 800,
					src: [
						'fonts/surahnames/sura_names.eot',
						'fonts/surahnames/sura_names.ttf',
						'fonts/surahnames/sura_names.woff',
						'fonts/surahnames/sura_names.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/surahnames/sura_names.eot',
						'fonts/surahnames/sura_names.ttf',
						'fonts/surahnames/sura_names.woff',
						'fonts/surahnames/sura_names.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/surahnames/sura_names.eot',
						'fonts/surahnames/sura_names.ttf',
						'fonts/surahnames/sura_names.woff',
						'fonts/surahnames/sura_names.woff2',
					],
				}],
			}, {
				family: 'divehi',
				variants: [{
					weight: 800,
					src: [
						'fonts/lang/divehi/DhivehiAkuru.otf',
						'fonts/lang/divehi/DhivehiAkuru.woff',
					],
				}, {
					weight: 600,
					src: [
						'fonts/lang/divehi/DhivehiAkuru.otf',
						'fonts/lang/divehi/DhivehiAkuru.woff',
					],
				}, {
					weight: 400,
					src: [
						'fonts/lang/divehi/DhivehiAkuru.otf',
						'fonts/lang/divehi/DhivehiAkuru.woff',
					],
				}],
			}, {
				family: 'NotoNastaliq',
				variants: [{
					weight: 800,
					src: [
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.ttf',
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.ttf',
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.ttf',
						'fonts/lang/arabic/NotoNastaliq/NotoNaskhArabic-Regular.woff2',
					],
				}],
			}, {
				family: 'MehrNastaliq',
				variants: [{
					weight: 800,
					src: [
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.ttf',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.ttf',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.ttf',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff',
						'fonts/lang/urdu/MehrNastaliq/MehrNastaliqWeb.woff2',
					],
				}],
			}, {
				family: 'DroidArabicNaskh',
				variants: [{
					weight: 800,
					src: [
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.ttf',
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.ttf',
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.ttf',
						'fonts/lang/kurdish/DriodArabicNaskh/droid-naskh-regular.woff2',
					],
				}],
			}, {
				family: 'ProximaVara',
				variants: [{
					weight: 800,
					src: [
						'fonts/lang/ProximaVara/ProximaVara.woff2',
					],
				}, {
					weight: 600,
					src: [
						'fonts/lang/ProximaVara/ProximaVara.woff2',
					],
				}, {
					weight: 400,
					src: [
						'fonts/lang/ProximaVara/ProximaVara.woff2',
					],
				}],
			}],
			emitCss: true,
		}),
	],
});
