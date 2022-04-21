import Element from '@components/Element/styles'
import styled from 'styled-components'

import TextFieldComponent from './types'

const Wrapper = styled(Element)<TextFieldComponent.WrapperProps>`
  --mainColor: ${({ palette }) => palette.main};
  --contrastColor: ${({ palette }) => palette.contrast};

  width: 100%;
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius * 3}px;
  padding: ${({ theme }) => `${theme.spacing}px 0`}px;
  transition-property: background-color, border-color, color;
  transition-duration: 160ms;
  color: var(--contrastColor);

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 1.5px;
    border-radius: 2px;
    background-color: var(--contrastColor);
    opacity: ${({ notEmpty }) => (notEmpty ? 1 : 0.7)};
  }

  .control {
    width: 100%;
    min-width: 0px;

    &::placeholder {
      color: var(--contrastColor);
      opacity: 0.7;
    }
  }
`

export const Error = styled.div`
  margin-bottom: 8px;
  margin-top: -8px;
  color: ${({ palette }) => palette.error};
  font-size: 0.7rem;
`

export default Wrapper
