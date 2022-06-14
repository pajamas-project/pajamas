import { CacheProvider, EmotionCache } from '@emotion/react'
import createCache from '@emotion/cache'
import { NhostNextProvider } from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import type { AppProps } from 'next/app'
import { FC } from 'react'
import { nhost } from '../libs'

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
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      {/* @ts-ignore */}
      <NhostApolloProvider nhost={nhost}>
        <Component {...pageProps} />
      </NhostApolloProvider>
    </NhostNextProvider>
  </CacheProvider>
)

export default MyApp
