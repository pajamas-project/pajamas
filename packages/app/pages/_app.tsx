import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { NhostNextProvider, NhostSession } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { nhost } from '../libs'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@pajamas/theme'

function createEmotionCache() {
  return createCache({ key: 'css' })
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    {/* @ts-ignore */}
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession as NhostSession}>
      <NhostApolloProvider nhost={nhost}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </NhostApolloProvider>
    </NhostNextProvider>
  </CacheProvider>
)

export default MyApp
