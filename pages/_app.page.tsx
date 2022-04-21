import Header from '@components/Header'
import store from '@store/index'
import GlobalStyles from '@styles/global'
import theme from '@styles/theme/main'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Provider store={store}>
        <GlobalStyles />
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
