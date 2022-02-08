import align from '@styles/mixins/align'
import styled from 'styled-components'

import ElementComponent from './types'

const Wrapper = styled.div<ElementComponent.WrapperProps>`
  // Reset styles
  padding: 0;
  margin: 0;
  font: inherit;
  letter-spacing: inherit;
  list-style: none;
  color: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  text-align: inherit;
  text-decoration: inherit;
  cursor: inherit;
  outline: none;
  caret-color: inherit;

  ${({ align: alignProp }) => align(alignProp)}
`

export default Wrapper
