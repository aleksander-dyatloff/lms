import { AllHTMLAttributes, FC } from 'react'

namespace GridComponent {
  export interface ColumnProps extends AllHTMLAttributes<HTMLElement> {
    size?: number
    className?: string
  }

  export interface MainComponent extends FC {
    Column: FC<ColumnProps>
  }
}

export default GridComponent
