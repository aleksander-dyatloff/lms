import Element from '@components/Element/styles'
import styled from 'styled-components'

const Wrapper = styled(Element)`
  background-color: ${({
    color, theme,
  }) => color ?? theme.palette.primary.contrast};
  border-radius: 2px;

  &.vertical {
    width: 1.5px;
    height: 100px;
  }

  &.horizontal {
    width: 100%;
    height: 1.5px;
  }
`

export default Wrapper
