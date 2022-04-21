import combineClasses from '@utils/combineClasses'

import Wrapper from './styles'
import ButtonComponent from './types'

const Modal: ButtonComponent.MainComponent = ({
  isOpen,
  onClose,
  className,
  children,
  ...restProps
}) => {
  const wrapperClasses = combineClasses(className)

  return (
    <Wrapper
      isOpen={isOpen}
      className={wrapperClasses}
      {...restProps}
    >
      <div
        className='backdrop'
        onClick={onClose}
      />
      <div className='content'>
        {children}
      </div>
    </Wrapper>
  )
}

export default Modal
