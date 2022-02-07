import Element from '@components/Element/styles'
import styled from 'styled-components'

import ButtonComponent from './types'

const Wrapper = styled(Element)<ButtonComponent.WrapperProps>`
  --mainColor: ${({
    theme, palette,
  }) => palette?.main ?? theme.palette.primary.main};
  --contrastColor: ${({
    theme, palette,
  }) => palette?.contrast ?? theme.palette.primary.contrast};

  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius * 3}px;
  padding: ${({ theme }) => `${theme.spacing}px ${theme.spacing * 3}`}px;
  transition-property: background-color, border-color, color;
  transition-duration: 160ms;

  &:not([disabled]):hover {
    --mainColor: ${({
    theme, palette,
  }) => palette?.mainDarken ?? theme.palette.primary.mainDarken};
  }

  &.filled {
    background-color: var(--mainColor);
    color: var(--contrastColor);
  }

  &.outlined {
    color: var(--mainColor);
    border: 2px solid var(--mainColor);
  }

  &.text {
    color: var(--mainColor);  
  }
`

export default Wrapper
