export const index = (name) => `import ${name} from './component'

export default ${name}
`

export const component = (name) => `import { FC } from 'react'
import Wrapper from './styles'
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

export const types = (name) => `namespace ${name}Component {
  export interface WrapperProps {
  }

  export interface Props {
  }
}

export default ${name}Component
`

export const styles = (name) => `import styled from 'styled-components'

import ${name}Component from './types'

const Wrapper = styled.div<${name}Component.WrapperProps>\`
\`
export default Wrapper
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