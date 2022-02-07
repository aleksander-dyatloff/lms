import Element from '@components/Element/styles'
import styled from 'styled-components'

const Wrapper = styled(Element)`
  background-color: gray;

  &.vertical {
    width: 1px;
    height: 100px;
  }

  &.horizontal {
    width: 100%;
    height: 1px;
  }
`

export default Wrapper
