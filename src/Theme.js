import { extendTheme } from "@chakra-ui/react";

const themes = {
  styles: {
    global: {
      'html, body': {
        backgroundColor: '#010101',
        color: 'gray.200',
        fontFamily: `'Manrope', sans-serif`,
        lineHeight: '1.7',
      },
      a: {
        color: 'teal.400',
      },
      h1: {
        color: 'whiteAlpha.900',
        fontSize: '64px',
        fontFamily: `'Playfair Display', serif`,
        lineHeight: '80px',

      },
    },
  },
}

const theme = extendTheme(themes);

export default theme;