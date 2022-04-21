import Align from '@interfaces/Align'
import { css } from 'styled-components'

const align = (alignProp?: Align) => {
  switch (alignProp) {
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

export default align
