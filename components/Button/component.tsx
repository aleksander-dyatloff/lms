import combineClasses from '@utils/combineClasses'
import { FC } from 'react'

import Wrapper from './styles'
import ButtonComponent from './types'

const Button: FC<ButtonComponent.Props> = ({
  variant = 'filled',
  className,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(variant, className)

  return (
    <Wrapper
      as='button'
      className={wrapperClasses}
      {...restProps}
    />
  )
}

export default Button
