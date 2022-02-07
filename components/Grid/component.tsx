import { FC } from 'react'

import Wrapper from './styles'
import GridComponent from './types'

const Grid: FC<GridComponent.Props> = ({ ...restProps }) => (
  <Wrapper
    {...restProps}
  />
)

export default Grid
