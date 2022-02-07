import Text from '@components/Text'
import Group from '@interfaces/Group'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const group: Group = {
  id: 1,
  name: '11-B',
  cadets: [1],
  subjects: [
    {
      id: 1,
      name: 'Geometry',
      color: '#64f5c0',
      teacher: {
        id: 1,
        name: 'Anna Ivanovna',
        role: 'Teacher',
        gender: 'Female',
      },
    },
    {
      id: 2,
      name: 'History',
      color: '#f5bd64',
      teacher: {
        id: 2,
        name: 'Petro Ivanovich',
        role: 'Teacher',
        gender: 'Male',
      },
    },
    {
      id: 3,
      name: 'English',
      color: '#64a3f5',
      teacher: {
        id: 3,
        name: 'Svetlana Andreivna',
        role: 'Teacher',
        gender: 'Female',
      },
    },
    {
      id: 4,
      name: 'Geography',
      color: '#64f570',
      teacher: {
        id: 4,
        name: 'Tatiana Ivanivna',
        role: 'Teacher',
        gender: 'Female',
      },
    },
    {
      id: 5,
      name: 'Physics',
      color: '#b664f5',
      teacher: {
        id: 5,
        name: 'Nikolay Sherbet',
        role: 'Teacher',
        gender: 'Male',
      },
    },
    {
      id: 6,
      name: 'Informatics',
      color: '#f56964',
      teacher: {
        id: 6,
        name: 'Nadejda Andreivna',
        role: 'Teacher',
        gender: 'Female',
      },
    },
    {
      id: 7,
      name: 'Ukrainian',
      color: '#424cff',
      teacher: {
        id: 7,
        name: 'Valentine Nikolayevna',
        role: 'Teacher',
        gender: 'Female',
      },
    },
    {
      id: 8,
      name: 'Russian',
      color: '#ff42a7',
      teacher: {
        id: 8,
        name: 'Anatoliy Petrosyan',
        role: 'Teacher',
        gender: 'Male',
      },
    },
    {
      id: 9,
      name: 'Algebra',
      color: '#42ffaa',
      teacher: {
        id: 9,
        name: 'Dmitro Kuzmin',
        role: 'Teacher',
        gender: 'Male',
      },
    },
  ],
}

const Page = styled.div`
  padding-top: 60px;

  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 0 ${({ theme }) => theme.spacing * 3}px 0;
    margin: 0 auto;
  }

  .subject {
    flex: 1 1 30%;
    margin: ${({ theme }) => theme.spacing}px;
    border-radius: ${({ theme }) => theme.borderRadius * 4}px;
    background-color: #f3f3f3;
    padding: ${({ theme }) => theme.spacing * 4}px;
  }
`

const Home: NextPage = () => (
  <Page>
    <Head>
      <title>Home page</title>
    </Head>
    <div className='container'>
      {group.subjects.map((subject) => (
        <div
          key={subject.id}
          className='subject'
        >
          <Text as='h5'>
            {subject.name}
          </Text>
          <Text as='div'>
            {group.name}
          </Text>
          <Text>
            {subject.teacher.name}
          </Text>
        </div>
      ))}
    </div>
    {/* <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText='Log in with Google'
        // TODO Fix typescript warning
        // @ts-ignore: Unreachable code error
        onSuccess={handleLogin}
        cookiePolicy='single_host_origin'
      /> */}
  </Page>
)

export default Home
