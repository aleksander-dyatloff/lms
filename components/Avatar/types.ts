import { AvatarSizes } from './constants'

export namespace AvatarComponent {
  export interface WrapperProps {
    size: number
  }

  export interface Props {
    src?: string
    alt: string
    size: keyof typeof AvatarSizes
  }
}

export default AvatarComponent
