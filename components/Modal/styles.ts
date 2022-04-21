import Element from '@components/Element/styles'
import styled from 'styled-components'

import ModalComponent from './types'

const Wrapper = styled(Element)<ModalComponent.WrapperProps>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ isOpen }) => (isOpen ? 'visible' : 'none')};

  .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 260ms ease;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }

  .content {
    position: relative;
    z-index: 1;
    padding: 16px;
    border-radius: 20px;
    background-color: white;
    transition-property: opacity, transform;
    transition-duration: 260ms;
    transition-timing-function: ease;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transform: scale(${({ isOpen }) => (isOpen ? 1 : 0)});
  }
`

export default Wrapper
