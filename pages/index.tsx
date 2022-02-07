import Avatar from '@components/Avatar'
import Header from '@components/Header'
import TabList from '@components/TabList'
import useAppDispatch from '@hooks/useAppDispatch/hook'
import ChangeHandler from '@interfaces/ChangeHandler'
import { loginUser } from '@store/authorizedUser'
import type { NextPage } from 'next'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'

const Home: NextPage = () =>
// const dispatch = useAppDispatch()

// const handleLogin = (googleData: GoogleLoginResponse) => {
//  void dispatch(loginUser(googleData.tokenId))
// }

  (
    <div>
      <Header />
      {/* <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        buttonText='Log in with Google'
        // TODO Fix typescript warning
        // @ts-ignore: Unreachable code error
        onSuccess={handleLogin}
        cookiePolicy='single_host_origin'
      /> */}
    </div>
  )

export default Home
