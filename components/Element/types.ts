import { HTMLAttributes } from 'react'

namespace ElementComponent {
  // eslint-disable-next-line max-len
  export interface Props extends HTMLAttributes<HTMLElement> {
    readonly onClickOutside?: (this: Document, ev: Event) => void
  }
}

export default ElementComponent
