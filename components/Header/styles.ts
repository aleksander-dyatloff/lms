import styled from 'styled-components'

import HeaderComponent from './types'

const Wrapper = styled.header<HeaderComponent.WrapperProps>`
  --mainColor: ${({ palette }) => palette.main};
  --contrastColor: ${({ palette }) => palette.contrast};

  padding: ${({ theme }) => `0 ${theme.spacing * 6}`}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  position: fixed;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrast};

  .navigation {
    height: 100%;
  }

  .searchWrapper {
    display: flex;
    align-items: center;
  }

  .navigationWrapper {
    display: flex;
  }

  .userInfo {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .userTitle {
    margin-right: 16px;
  }
`
export default Wrapper
