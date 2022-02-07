import styled from 'styled-components'

const gridColumnsCount = 12

const Wrapper = styled.div`
  --gridSpacing: ${({ theme }) => theme.spacing * 3}px;

  display: flex;
  flex-wrap: wrap;
  margin-left: - var(--gridSpacing);
  margin-right: - var(--gridSpacing);

  & > * {
    width: 100%;
    max-width: 100%;
    padding-left: var(--gridSpacing);
    padding-right: var(--gridSpacing);
  }

  .col {
    flex: 1 0 0%;
  }
`
export default Wrapper
