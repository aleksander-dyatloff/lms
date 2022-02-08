import Align from '@interfaces/Align'
import { HTMLAttributes } from 'react'

namespace ElementComponent {
  export interface WrapperProps {
    align?: Align
  }
  export interface Props extends HTMLAttributes<HTMLElement> {
    readonly onClickOutside?: (this: Document, ev: Event) => void
  }
}

export default ElementComponent
