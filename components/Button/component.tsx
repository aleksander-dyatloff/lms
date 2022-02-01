import combineClasses from '@utils/combineClasses'
import { FC } from 'react'
import { useTheme } from 'styled-components'

import Wrapper from './styles'
import ButtonComponent from './types'

const Button: FC<ButtonComponent.Props> = ({
  variant = 'filled',
  className,
  ...restProps
}) => {
  const theme = useTheme()

  const wrapperClasses = combineClasses(variant, className)

  return (
    <Wrapper
      as='button'
      className={wrapperClasses}
      palette={theme.palette.primary}
      {...restProps}
    />
  )
}

export default Button
