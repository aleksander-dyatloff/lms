import { ColorPalette } from '@styles/theme/palette'

namespace ButtonComponent {
  export interface WrapperProps {
    palette: ColorPalette
  }

  export interface Props {
    palette?: ColorPalette
    className?: string
    variant?: 'filled' | 'outlined' | 'text'
  }
}

export default ButtonComponent
