import { DefaultTheme } from 'styled-components'

const mainReversedTheme: DefaultTheme = {
  spacing: 4,
  borderRadius: 4,
  palette: {
    primary: {
      main: '#ffffff',
      mainDarken: '#f2f2f2',
      contrast: '#8e24aa',
      error: 'red',
    },
    secondary: {
      main: '#ffffff',
      mainDarken: '#f2f2f2',
      contrast: '#424242',
      error: 'red',
    },
  },
}

export type ITheme = typeof mainReversedTheme

export default mainReversedTheme
