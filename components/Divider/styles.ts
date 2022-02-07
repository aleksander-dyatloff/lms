import Element from '@components/Element/styles'
import styled from 'styled-components'

const Wrapper = styled(Element)`
  background-color: ${({
    color, theme,
  }) => color ?? theme.palette.primary.contrast};

  &.vertical {
    width: 2px;
    height: 100px;
  }

  &.horizontal {
    width: 100%;
    height: 2px;
  }
`

export default Wrapper
