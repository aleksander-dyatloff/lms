import Layout from '@components/Layout'
import Text from '@components/Text'
import useAppDispatch from '@hooks/useAppDispatch/hook'
import { loginUser } from '@store/authorizedUser'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'

import Page from './styles'

const Login: NextPage = () => {
  const dispatch = useAppDispatch()

  const router = useRouter()

  const handleLogin = (res: GoogleLoginResponse) => {
    void dispatch(loginUser(res.tokenId)).then(() => {
      void router.push('/')
    })
  }

  return (
    <Layout>
      <Page>
        <Head>
          <title>Login</title>
        </Head>
        <div className='container'>
          <div className='preview'>
            <Text
              variant='h2'
              className='title'
            >
              Login to account
            </Text>
            <GoogleLogin
              clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
              buttonText='Log in with Google'
              onSuccess={handleLogin}
              cookiePolicy='single_host_origin'
            />
          </div>
        </div>
      </Page>
    </Layout>
  )
}

export default Login
