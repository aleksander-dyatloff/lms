import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Element from './component'

describe('Element component', () => {
  test('should match to snapshot', () => {
    const { container } = render(
      <Element>
        Click
      </Element>,
    )

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Element'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <Element>
          Click
        </Element>
      </Profiler>,
    )
  })
})
