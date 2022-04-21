import { AllHTMLAttributes } from 'react'

namespace TextFieldComponent {
  export interface WrapperProps {
    inFocus: boolean
    notEmpty: boolean
  }

  export interface Props extends AllHTMLAttributes<HTMLInputElement> {
    error?: string | boolean
  }
}

export default TextFieldComponent
