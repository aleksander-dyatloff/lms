import styled from 'styled-components'

const Page = styled.div`
  padding-top: 60px;

  .container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing * 3}px 0;
    margin: 0 auto;
  }
`

export default Page
