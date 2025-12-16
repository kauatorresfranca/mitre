import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Testimonials from "./components/sections/testemonials"
import Diferenciais from "./components/sections/diferenciais"
import Pain from "./components/sections/pain"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Pain />
      <Diferenciais />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
