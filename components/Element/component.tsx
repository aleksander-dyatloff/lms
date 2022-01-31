import useRefs from '@hooks/useRefs'
import { forwardRef, useEffect, useRef } from 'react'

import Wrapper from './styles'
import ElementComponent from './types'

const Element = forwardRef<HTMLElement | null, ElementComponent.Props>(({
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
      {...restProps}
    />
  )
})

export default Element
