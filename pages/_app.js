// pages/_app.js
import '../styles/globals.css'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '20px', background: '#f5f5f5' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  )
}
