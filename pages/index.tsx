import AuthAPI from '@api/auth'
import type { NextPage } from 'next'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'

const Home: NextPage = () => {
  const handleLogin = (googleData: GoogleLoginResponse) => {
    void AuthAPI.login(googleData.tokenId)
  }

  return (
    <GoogleLogin
      clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
      buttonText='Log in with Google'
      // TODO Fix typescript warning
      // @ts-ignore: Unreachable code error
      onSuccess={handleLogin}
      cookiePolicy='single_host_origin'
    />
  )
}

export default Home
