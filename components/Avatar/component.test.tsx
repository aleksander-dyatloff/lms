import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Avatar from './component'

describe('Avatar component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<Avatar />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Avatar'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <Avatar />
      </Profiler>,
    )
  })
})
