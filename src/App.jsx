import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Occasions from './components/Occasions'
import FeaturedTemplates from './components/FeaturedTemplates'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import WhyInvitinium from './components/WhyInvitinium'
import OurWork from './components/OurWork'
import CustomCTA from './components/CustomCTA'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Occasions />
        <FeaturedTemplates />
        <HowItWorks />
        <Services />
        <WhyInvitinium />
        <OurWork />
        <CustomCTA />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
