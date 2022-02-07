import { ColorPalette } from '@styles/theme/palette'

namespace ButtonComponent {
  export interface WrapperProps {
    palette?: ColorPalette
  }

  export interface Props extends WrapperProps {
    className?: string
    variant?: 'filled' | 'outlined' | 'text'
  }
}

export default ButtonComponent
