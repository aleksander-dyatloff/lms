import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import Avatar from './component'

describe('Avatar component', () => {
  test('should match to snapshot', () => {
    const { container } = render(
      <Avatar
        src='http://some'
        alt='Some alt'
      />,
    )

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='Avatar'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(5)
        }}
      >
        <Avatar
          src='http://some'
          alt='Some alt'
        />
      </Profiler>,
    )
  })
})
