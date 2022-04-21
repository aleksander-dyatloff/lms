import { DefaultTheme } from 'styled-components'

const mainTheme: DefaultTheme = {
  spacing: 4,
  borderRadius: 4,
  palette: {
    primary: {
      main: '#8e24aa',
      mainDarken: '#6d1785',
      contrast: '#ffffff',
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

export type ITheme = typeof mainTheme

export default mainTheme
