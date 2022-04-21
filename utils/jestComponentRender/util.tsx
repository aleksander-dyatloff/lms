import theme from '@styles/theme/main'
import { render as testRender } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

const render = (component: ReactElement<any, any> | null) => testRender(
  <ThemeProvider theme={theme}>
    {component}
  </ThemeProvider>,
)

export default render
