import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 32px;

  .item {
    cursor: pointer;
    padding: 0 ${({ theme }) => theme.spacing * 3}px;
    transition-property: opacity;
    transition-duration: 160ms;
    transition-timing-function: ease-out;

    &:not(.active) {
      opacity: 0.7;
    }
  }

  .indicator {
    position: absolute;
    height: 3px;
    border-radius: 3px 3px 0 0;
    background-color: white;
    bottom: 0;
    left: 0;
    right: 0;
    transition-property: width, left;
    transition-duration: 160ms;
    transition-timing-function: ease-out;
  }
`
export default Wrapper
