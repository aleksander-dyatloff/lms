import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Divider from './component'

describe('Divider component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<Divider />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Divider'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <Divider />
      </Profiler>,
    )
  })
})
