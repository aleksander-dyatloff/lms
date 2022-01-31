import 'jest-styled-components'

import theme from '@styles/theme'
import { render } from '@testing-library/react'
import { Profiler } from 'react'
import { ThemeProvider } from 'styled-components'

import Button from './component'

describe('Button component', () => {
  test('should match to snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>
          Click
        </Button>
      </ThemeProvider>,
    )

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profiler
          id='Button'
          onRender={(_, __, renderDuration) => {
            expect(renderDuration).toBeLessThanOrEqual(5)
          }}
        >
          <Button>
            Click
          </Button>
        </Profiler>
      </ThemeProvider>,
    )
  })
})
