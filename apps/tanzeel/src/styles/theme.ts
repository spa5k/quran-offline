import { extendTheme, theme as ChakraTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
	initialColorMode: 'light',
	// useSystemColorMode: true,
};

const theme = extendTheme({
	...ChakraTheme,
	config,
});

export default theme;
