import useRefs from '@hooks/useRefs'
import { ForwardedRef, forwardRef, ReactElement, useEffect, useRef } from 'react'

import { Wrapper } from './styles'
import { ElementComponent } from './types'

const Element = forwardRef<HTMLElement, ElementComponent.Props>(({
  as = 'div',
  onClickOutside,
  onFocus,
  onClick,
  onClickCapture,
  tabIndex = (onFocus ?? onClick ?? onClickCapture) ? 0 : undefined,
  ...restProps
}, forwardedRef) => {
  const innerRef = useRef<HTMLElement>(null)

  const ref = useRefs(forwardedRef, innerRef)

  useEffect(() => {
    const handleOutsideClick: EventListener = (event) => {
      if (ref.current && !innerRef?.current?.contains(event.target as Node)) {
        onClickOutside?.(event)
      }
    }

    if (onClickOutside) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => document.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <Wrapper
      tabIndex={tabIndex}
...restProps}
    />
  )
// eslint-disable-next-line max-len
})

export default Element
