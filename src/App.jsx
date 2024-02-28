import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Courses from './Components/Courses'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Reviews from './Components/Reviews'

function App() {

  return (
    <>
    <Navbar />
    <main>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='courses'>
        <Courses />
      </section>
      <section id='reviews'>
        <Reviews />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
