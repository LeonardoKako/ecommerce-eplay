import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import { GlobalCss } from './style'
import { Header } from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
