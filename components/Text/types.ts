namespace TextComponent {
  export type Typography = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p' | 'sub'

  export interface Props {
    as?: Typography
    variant?: Typography
    className?: string
  }
}

export default TextComponent
