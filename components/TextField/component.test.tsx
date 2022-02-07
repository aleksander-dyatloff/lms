import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import TextField from './component'

describe('TextField component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<TextField />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='TextField'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <TextField />
      </Profiler>,
    )
  })
})
