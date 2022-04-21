import Layout from '@components/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import Profile from 'shared/Profile'

import Page from './styles'

const Home: NextPage = () => (
  <Layout>
    <Page>
      <Head>
        <title>Profile</title>
      </Head>
      <div className='container'>
        <Profile />
      </div>
    </Page>
  </Layout>
)

export default Home
