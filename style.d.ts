import 'styled-components'

import mainTheme from '@styles/theme/main'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: number
    spacing: number
    palette: {
      [K: keyof palette]: typeof mainTheme.palette
    }
  }
}
