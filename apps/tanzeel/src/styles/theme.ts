import { extendTheme, theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

const theme = extendTheme({
	...ChakraTheme,
	fonts: {
		heading: 'Source Sans Pro',
		body: 'Neuton',
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
	},
	config,
});

export default theme;
