import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Grid from './component'

describe('Grid component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<Grid />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Grid'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <Grid />
      </Profiler>,
    )
  })
})
