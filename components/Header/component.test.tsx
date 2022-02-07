import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Header from './component'

describe('Header component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<Header />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Header'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <Header />
      </Profiler>,
    )
  })
})
