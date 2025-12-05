import FAQ from "./components/sections/faq"
import Footer from "./components/sections/footer"
import Header from "./components/sections/header"
import Hero from "./components/sections/hero"
import Services from "./components/sections/services"
import Testimonials from "./components/sections/testemonials"
import Diferenciais from "./components/sections/diferenciais"
import Cta from "./components/sections/cta"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Diferenciais />
      <Services />
      <Testimonials />
      <Cta />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
