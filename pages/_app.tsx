import store from '@store/index'
import GlobalStyles from '@styles/global'
import theme from '@styles/theme'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyles />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
