import Align from '@interfaces/Align'
import { AllHTMLAttributes, FC } from 'react'

import { AvatarSizes } from './constants'

export namespace AvatarComponent {
  export interface WrapperProps {
    size: number
  }

  export interface Props extends AllHTMLAttributes<HTMLElement> {
    align?: Align
    src?: string
    alt: string
    size?: number
  }

  export interface MainComponent extends FC<Props> {
    size?: typeof AvatarSizes
  }
}

export default AvatarComponent
