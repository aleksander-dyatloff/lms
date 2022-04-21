import combineClasses from '@utils/combineClasses'

import { variantClasses } from './constants'
import Wrapper from './styles'
import ButtonComponent from './types'

const Button: ButtonComponent.MainComponent = ({
  variant = ButtonComponent.Variant.Filled,
  className,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(variantClasses[variant], className)

  return (
    <Wrapper
      as='button'
      className={wrapperClasses}
      {...restProps}
    />
  )
}

Button.variants = ButtonComponent.Variant

export default Button
