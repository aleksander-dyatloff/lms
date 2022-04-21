import { AllHTMLAttributes, FC } from 'react'

export namespace AvatarComponent {
  export interface WrapperProps {
  }

  export interface Breadcrumb {
    href?: string
    label: string
  }

  export interface Props extends AllHTMLAttributes<HTMLElement> {
    items: Breadcrumb[]
  }

  export interface MainComponent extends FC<Props> {
  }
}

export default AvatarComponent
