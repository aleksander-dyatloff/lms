import { DefaultTheme } from 'styled-components'

import { palette } from './palette'

const theme: DefaultTheme = {
  spacing: 4,
  borderRadius: 4,
  palette,
}

export type ITheme = typeof theme

export default theme
