import Align from '@interfaces/Align'

import { AvatarSizes } from './constants'

export namespace AvatarComponent {
  export interface WrapperProps {
    size: number
  }

  export interface Props {
    align?: Align
    src?: string
    alt: string
    size: keyof typeof AvatarSizes
  }
}

export default AvatarComponent
