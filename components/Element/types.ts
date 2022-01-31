import { HTMLAttributes, MouseEventHandler } from 'react'

export namespace ElementComponent {
  // eslint-disable-next-line max-len
  export interface Props extends HTMLAttributes<HTMLElement> {
    readonly onClickOutside?: MouseEventHandler<HTMLElement>
  }
}
