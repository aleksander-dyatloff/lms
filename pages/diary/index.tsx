import WeeklyCalendar from '@components/WeeklyCalendar'
import { NextPage } from 'next'
import Head from 'next/head'
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
`

const Diary: NextPage = () => (
  <Page>
    <Head>
      <title>Diary</title>
    </Head>
    <div className='container'>
      <WeeklyCalendar
        value={111}
        onChange={() => true}
      />
    </div>
  </Page>
)

export default Diary
