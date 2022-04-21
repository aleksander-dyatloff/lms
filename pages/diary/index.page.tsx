import Layout from '@components/Layout'
import WeeklyCalendar from '@components/WeeklyCalendar'
import Page from '@pages/styles'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Diary: NextPage = () => (
  <Layout>
    <Page>
      <Head>
        <title>Diary</title>
      </Head>
      <div className='container'>
        <WeeklyCalendar />
      </div>
    </Page>
  </Layout>
)

export default Diary
