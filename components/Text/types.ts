import Align from '@interfaces/Align'

namespace TextComponent {
  export type Typography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'sub' | 'a'

  export interface Props {
    align?: Align
    as?: Typography
    variant?: Typography
    className?: string
  }
}

export default TextComponent
