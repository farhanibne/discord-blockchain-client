import '../styles/globals.css'
import { DiscordProvider } from '../context/context'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <DiscordProvider>
      <Head>
        <title>DISCORD - BLOCKCHAIN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </DiscordProvider>
  )
}

export default MyApp