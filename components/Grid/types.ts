import { FC } from 'react'

namespace GridComponent {
  export interface ColumnProps {
    size?: number
  }

  export interface MainComponent extends FC {
    Column: FC<ColumnProps>
  }
}

export default GridComponent
