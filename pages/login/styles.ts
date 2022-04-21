import styled from 'styled-components'

const Page = styled.div`
  padding-top: 60px;

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing * 3}px 0;
    margin: 0 auto;
    height: 90vh;
  }

  .preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }

  .title {
    margin-bottom: 16px;
  }
`

export default Page
