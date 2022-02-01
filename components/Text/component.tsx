import combineClasses from '@utils/combineClasses'
import { FC } from 'react'

import Wrapper from './styles'
import TextComponent from './types'

const Text: FC<TextComponent.Props> = ({
  as = 'span',
  className,
  variant = as,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(variant, className)

  return (
    <Wrapper
      className={wrapperClasses}
      as={as}
      {...restProps}
    />
  )
}

export default Text
