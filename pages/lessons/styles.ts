import styled from 'styled-components'

const Page = styled.div`
  padding-top: 60px;

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing * 3}px 0;
    margin: 0 auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: #f4f4f4;
    padding: 16px;
    cursor: pointer;
  }

  .lessonTitle {
    margin-bottom: 6px;
  }

  .lessonsActions {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .lessonsActionsDivider {
    margin: 0 8px;
  }

  .lessonWrapper {
    margin-bottom: var(--gridSpacing);
    margin-top: var(--gridSpacing);
  }

  .lessonTeacher {
    margin-right: auto;
  }

  .lessonStatus {
    display: flex;
    align-items: center;
  }
`

export default Page
