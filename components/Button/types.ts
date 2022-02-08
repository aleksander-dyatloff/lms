import { ColorPalette } from '@styles/theme/palette'
import { FC } from 'react'

namespace ButtonComponent {
  export enum Variant {
    Filled,
    Outlined,
    Text,
  }
  export interface WrapperProps {
    palette?: ColorPalette
  }

  export interface Props extends WrapperProps {
    className?: string
    variant?: Variant
  }

  export interface MainComponent extends FC<Props> {
    variants: typeof Variant
  }
}

export default ButtonComponent
