import combineClasses from '@utils/combineClasses'
import { FC } from 'react'

import Wrapper from './styles'
import DividerComponent from './types'

const Divider: FC<DividerComponent.Props> = ({
  dir = 'horizontal',
  color,
  className,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(dir, className)

  return (
    <Wrapper
      className={wrapperClasses}
      {...restProps}
    />
  )
}

export default Divider
