import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// Define custom colors
const colors = {
  text: {
    light: 'black', // Light mode text color
    dark: 'white', // Dark mode text color
  },
  border: {
    light: 'black', // Light mode border color
    dark: 'white', // Dark mode border color
  },
};

const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Poppins, sans-serif',
};

const theme = extendTheme({ config, colors, fonts });

export default theme;
