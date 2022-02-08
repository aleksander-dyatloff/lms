import combineClasses from '@utils/combineClasses'

import Wrapper from './styles'
import GridComponent from './types'

const Grid: GridComponent.MainComponent = ({ ...restProps }) => (
  <Wrapper
    {...restProps}
  />
)

Grid.Column = ({
  size,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(size ? `col-${size}` : 'col')

  return (
    <div
      className={wrapperClasses}
      {...restProps}
    />
  )
}

export default Grid
