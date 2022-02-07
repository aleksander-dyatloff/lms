import { ColorPalette } from '@styles/theme/palette'
import { HTMLAttributes } from 'react'

namespace HeaderComponent {
  export interface WrapperProps {
    palette: ColorPalette
  }

  export type Props = HTMLAttributes<HTMLElement>
}

export default HeaderComponent
