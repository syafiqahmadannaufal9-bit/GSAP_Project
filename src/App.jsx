import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/about.jsx";
import Art from "./components/Art.jsx";
import Contact from "./components/Contact.jsx";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Contact />
    </main>
    
  )
}

export default App