import styled from 'styled-components'

const Page = styled.div`
  padding-top: 80px;

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing * 3}px 0;
    margin: 0 auto;
  }

  .breadcrumbs {
    margin-bottom: 16px;
  }

  .lessonName {
    margin-bottom: 8px;
  }

  .lessonDescription {
    margin-bottom: 16px;
  }

  .activityTitle {
    text-align: center;
  }

  .users {
    display: flex;
    flex-direction: column;
  }

  .userInfo {
    display: flex;
    flex-direction: column;
  }

  .userName {

  }

  .userGrade {
    color: gray;
  }

  .usersTitle {
    margin-bottom: 16px;
  }

  .userDivider {
    opacity: 0.5;
  }

  .user {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  .userAvatar {
    margin-right: 16px;
  }
`

export default Page
