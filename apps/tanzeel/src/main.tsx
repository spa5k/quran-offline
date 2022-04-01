import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/neuton/400.css';
import '@fontsource/neuton/700.css';
import '@fontsource/neuton/800.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
import theme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
