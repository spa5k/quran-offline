/* eslint-disable @typescript-eslint/typedef */
import { extendTheme, theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

const theme = extendTheme({
	...ChakraTheme,
	fonts: {
		// heading: 'Source Sans Pro',
		// body: 'Neuton',
	},
	colors: {
		brand: {
			100: '#def2e7',
			200: '#8ED2AC',
			300: '#B6E2CA',
			400: '#90d0ab',
			500: '#95E3B6',
			600: '#75DAA0',
			700: '#55D18A',
			800: '#36C874',
			900: '#2da861',
		},
		quran: {
			50: '#83DCA8',
			100: '#73D79D',
			200: '#53CE87',
			300: '#37C271',
			400: '#2EA25F',
			500: '#25824C', // default
			600: '#1F6E40',
			700: '#1A5A35',
			800: '#144629',
			900: '#0E331E',
		},
	},
	config,
});

export default theme;
