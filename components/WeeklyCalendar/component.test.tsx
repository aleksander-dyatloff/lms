import 'jest-styled-components'

import { render } from '@testing-library/react'
import { Profiler } from 'react'

import WeeklyCalendar from './component'

describe('WeeklyCalendar component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<WeeklyCalendar />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='WeeklyCalendar'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <WeeklyCalendar />
      </Profiler>,
    )
  })
})
