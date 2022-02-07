import ChangeHandler from '@interfaces/ChangeHandler'
import { FC } from 'react'

namespace TabListComponent {
  export interface Props {
    className?: string
  }

  export interface TabSize {
    width: number
    left: number
  }

  export interface ItemProps {
    value: string
    selectedValue: string
    name: string
    onChange: ChangeHandler
  }

  export interface MainComponent extends FC<Props> {
    Item: FC<ItemProps>
  }
}

export default TabListComponent
