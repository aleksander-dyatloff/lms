import Image from 'next/image'
import { FC } from 'react'
import { useTheme } from 'styled-components'

import { AvatarSizes } from './constants'
import Wrapper from './styles'
import AvatarComponent from './types'

const Avatar: FC<AvatarComponent.Props> = ({
  alt,
  src,
  size = 'sm',
  ...restProps
}) => {
  const theme = useTheme()

  return (
    <Wrapper
      theme={theme}
      size={AvatarSizes[size]}
      {...restProps}
    >
      {src ? (
        <Image
          width={AvatarSizes[size]}
          height={AvatarSizes[size]}
          src={src}
          alt={alt}
        />
      ) : (
        <span>{alt[0]}</span>
      )}
    </Wrapper>
  )
}

export default Avatar
