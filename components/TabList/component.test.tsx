import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import TabList from './component'

describe('TabList component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<TabList />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='TabList'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <TabList />
      </Profiler>,
    )
  })
})
