import '@/styles/globals.css'
import Layout from '@/components/layout/Layout'
import type { AppProps } from 'next/app'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout >
    <LoginModal/>
    <RegisterModal />
    <Component {...pageProps} />
  </Layout>
  
}
