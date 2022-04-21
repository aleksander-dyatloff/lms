import Element from '@components/Element/styles'
import styled from 'styled-components'

import AvatarComponent from './types'

const Wrapper = styled(Element)<AvatarComponent.WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ size }) => size / 1.5}px;
  font-weight: 500;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  overflow: hidden;
  background-color: var(--contrastColor);
  color: var(--mainColor);
  user-select: none;
`

export default Wrapper
