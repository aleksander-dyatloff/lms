import { AllHTMLAttributes, FC } from 'react'

namespace ModalComponent {
  export interface WrapperProps extends AllHTMLAttributes<HTMLElement> {
    isOpen: boolean
  }

  export interface Props extends WrapperProps {
    onClose: () => void
  }

  export type MainComponent = FC<Props>
}

export default ModalComponent
