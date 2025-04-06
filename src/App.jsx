
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Videos'
import About from './components/About'
import Contact from './components/Contact'
import Products from './components/Products'
import NavBar from './components/NavBar'
import FeaturedProducts from './components/FeaturedProducts'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <FeaturedProducts/>
      <Products/>
      <Services/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
