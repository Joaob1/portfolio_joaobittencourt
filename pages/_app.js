import { ToastContainer } from 'react-toastify'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
