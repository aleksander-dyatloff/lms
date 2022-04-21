import Image from 'next/image'

import { AvatarSizes } from './constants'
import Wrapper from './styles'
import AvatarComponent from './types'

const Avatar: AvatarComponent.MainComponent = ({
  alt,
  src,
  size = AvatarSizes.sm,
  ...restProps
}) => (
  <Wrapper
    size={size}
    {...restProps}
  >
    {src ? (
      <Image
        width={size}
        height={size}
        src={src}
        alt={alt}
      />
    ) : (
      <span>{alt[0]}</span>
    )}
  </Wrapper>
)

export default Avatar
