import { ForwardedRef, MutableRefObject, useEffect, useRef } from 'react'

const useRefs = (...refs: MutableRefObject<any>[] | ForwardedRef<any>[]) => {
  const targetRef = useRef()

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])

  return targetRef
}

export default useRefs
