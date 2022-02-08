import Align from '@interfaces/Align'
import styled, { css } from 'styled-components'

import ElementComponent from './types'

const getAlignStyles = (align?: Align) => {
  switch (align) {
    case Align.Top:
      return css`margin-bottom: auto;`

    case Align.Right:
      return css`margin-left: auto;`

    case Align.Bottom:
      return css`margin-top: auto;`

    case Align.Left:
      return css`margin-right: auto;`

    case Align.Horizontal:
      return css`
        margin-left: auto;
        margin-right: auto;
      `

    case Align.Vertical:
      return css`
        margin-top: auto;
        margin-bottom: auto;
      `

    case Align.Center:
      return css`
        margin: auto;
      `

    default:
      return null
  }
}

const Wrapper = styled.div<ElementComponent.WrapperProps>`
  // Reset styles
  padding: 0;
  margin: 0;
  font: inherit;
  letter-spacing: inherit;
  list-style: none;
  color: inherit;
  background-color: inherit;
  border: none;
  border-radius: 0;
  text-align: inherit;
  text-decoration: inherit;
  cursor: inherit;
  outline: none;
  caret-color: inherit;

  ${({ align }) => getAlignStyles(align)}
`

export default Wrapper
