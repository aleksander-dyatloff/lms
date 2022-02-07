import { ColorPalette } from '@styles/theme/palette'
import { AllHTMLAttributes } from 'react'

namespace TextFieldComponent {
  export interface WrapperProps {
    palette: ColorPalette
    inFocus: boolean
    notEmpty: boolean
  }

  export interface Props extends AllHTMLAttributes<HTMLInputElement> {
  }
}

export default TextFieldComponent
