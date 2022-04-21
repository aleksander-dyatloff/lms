import render from '@utils/jestComponentRender'
import { FC, ForwardRefExoticComponent, useEffect, useRef } from 'react'

const shouldProvideRef = (Comp: ForwardRefExoticComponent<any>) => {
  test('should provide ref', () => {
    const TestComponent: FC = () => {
      const ref = useRef<HTMLElement | null>(null)

      useEffect(() => {
        if (ref.current === null) throw new Error('no provided ref')
      }, [ref.current])

      return (
        <Comp ref={ref}>
          Some
        </Comp>
      )
    }

    void render(
      <TestComponent />,
    )
  })
}

export default shouldProvideRef
