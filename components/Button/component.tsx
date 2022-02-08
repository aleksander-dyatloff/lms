import combineClasses from '@utils/combineClasses'

import Wrapper from './styles'
import ButtonComponent from './types'

const Button: ButtonComponent.MainComponent = ({
  variant = ButtonComponent.Variant.Filled,
  className,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(String(variant), className)

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
