import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import PoliticaPrivacidade from './pages/politica-privacidade'
import TermoUso from './pages/termos-uso'
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='politica-privacidade' element={<PoliticaPrivacidade />} />
        <Route path='termos-uso' element={<TermoUso />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
