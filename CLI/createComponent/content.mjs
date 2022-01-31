export const index = () => `export * from './component'`

export const component = (name) => `import { FC } from 'react'
import { Wrapper } from './styles'
import ${name}Component from './types'

const ${name}: FC<${name}Component.Props> = ({ ...restProps }) => (
  <Wrapper
    {...restProps}
  />
)

export default ${name}
`

export const memo = (name) => `import { memo } from 'react'

import ${name} from './component'

export default memo(${name})
`

export const types = (name) => `export namespace ${name}Component {
  interface WrapperProps {
  }

  export interface Props {
  }
}

export default ${name}Component
`

export const styles = (name) => `import styled from 'styled-components'

import { ${name}Component } from './types'

export const Wrapper = styled.div<${name}Component.WrapperProps>\`
\`
`

export const componentTest = (name) => `import 'jest-styled-components'

import { render } from '@testing-library/react'

import ${name} from './component'
import { Profiler } from 'react'

describe('${name} component', () => {
  test('should match to snapshot', () => {
    const { container } = render(<${name} />)

    expect(container).toMatchSnapshot()
  })

  test('first render duration should match to specification', () => {
    render(
      <Profiler
        id='${name}'
        onRender={(_, __, renderDuration) => {
          expect(renderDuration).toBeLessThanOrEqual(1.5)
        }}
      >
        <${name} />
      </Profiler>,
    )
  })
})
`