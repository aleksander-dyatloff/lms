import 'styled-components'

import { ColorPalette, palette } from '@styles/theme/palette'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number
    spacing: number
    palette: {
      [K: keyof palette]: ColorPalette
    }
  }
}
