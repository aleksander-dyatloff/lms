import styled, { css } from 'styled-components'

import { columnSize, gridColumnsCount } from './constants'

const Wrapper = styled.div`
  --gridSpacing: ${({ theme }) => theme.spacing * 3}px;

  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: - var(--gridSpacing);
  margin-right: - var(--gridSpacing);

  & > * {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 100%;
    padding-left: var(--gridSpacing);
    padding-right: var(--gridSpacing);
  }

  .col {
    flex: 1 0 0%;
  }

  ${Array.from(Array(gridColumnsCount)).map((_, index) => css`
    .col-${index + 1} {
      width: ${columnSize * (index + 1)}%;
    }
  `)}
`
export default Wrapper
