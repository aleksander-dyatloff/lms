import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Text from './component'

describe('Text component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<Text />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Text'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(5)
        }}
      >
        <Text />
      </Profiler>,
    )
  })
})
