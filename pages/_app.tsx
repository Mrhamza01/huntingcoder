import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import PNavbar from '../components/PNavbar.js'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return  <>  
  <PNavbar/>
  <Component {...pageProps} />
  </>
}
