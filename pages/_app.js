import '@/styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Details from '../components/Details'
import Footer from '../components/Footer'


export default function App({ Component, pageProps }) {
  return<>
   <Header/>
   <Navbar/>
   <Details/>
   <Component {...pageProps} />
   <Footer/> 
  </>
} 