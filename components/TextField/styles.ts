import styled, { css } from 'styled-components'

import TextFieldComponent from './types'

const Wrapper = styled.div<TextFieldComponent.WrapperProps>`
  --mainColor: ${({ palette }) => palette.main};
  --contrastColor: ${({ palette }) => palette.contrast};

  min-height: 36px;
  min-width: 200px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius * 3}px;
  padding: ${({ theme }) => `${theme.spacing}px ${theme.spacing * 3}`}px;
  transition-property: background-color, border-color, color;
  transition-duration: 160ms;
  color: var(--contrastColor);

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: ${({ theme }) => theme.spacing * 3}px;
    right: ${({ theme }) => theme.spacing * 3}px;
    height: 2px;
    width: 100%;
    background-color: white;
    opacity: ${({ notEmpty }) => (notEmpty ? 1 : 0.7)};
  }

  .control {
    width: 100%;

    &::placeholder {
      color: var(--contrastColor);
      opacity: 0.7;
    }
  }
`
export default Wrapper
