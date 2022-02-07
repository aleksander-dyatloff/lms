import styled from 'styled-components'

import WeeklyCalendarComponent from './types'

const Wrapper = styled.div<WeeklyCalendarComponent.WrapperProps>`
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
  border-radius: ${({ theme }) => theme.borderRadius * 4}px;

  .head {
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing * 4}px;
  }

  .headItem, .bodyItem {
    flex: 1 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .dayNumber {
    padding: ${({ theme }) => theme.spacing}px;
    min-width: 40px;
    min-height: 40px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    &.active {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.primary.contrast};
    }
  }

  .body {
    display: flex;
    padding: ${({ theme }) => theme.spacing * 4}px;
  }

  .panel {
    background-color: ${({ theme }) => theme.palette.primary.contrast};
    border-radius: ${({ theme }) => theme.borderRadius * 2}px;
    overflow: hidden;

    & > * {
      padding: ${({ theme }) => theme.spacing * 1}px;
    }
  }

  .panelHeader {
    background-color: #64a3f5;
    color: white;
  }
`
export default Wrapper
