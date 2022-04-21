import { AllHTMLAttributes, FC } from 'react'

namespace ButtonComponent {
  export enum Variant {
    Filled,
    Outlined,
    Text,
  }
  export interface WrapperProps extends AllHTMLAttributes<HTMLElement> {

  }

  export interface Props extends WrapperProps {
    className?: string
    variant?: Variant
  }

  export interface MainComponent extends FC<Props> {
    variants: typeof Variant
  }
}

export default ButtonComponent
