import FAQ from "../../components/sections/faq"
import Hero from "../../components/sections/hero"
import Testimonials from "../../components/sections/testemonials"
import Diferenciais from "../../components/sections/diferenciais"
import Pain from "../../components/sections/pain"


const Home = () => {
  return (
    <>
        <Hero />
        <Pain />
        <Diferenciais />
        <Testimonials />
        <FAQ />
    </>
  )
}

export default Home