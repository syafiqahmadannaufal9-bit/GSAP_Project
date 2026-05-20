import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/cocktails.jsx";
import About from "./components/about.jsx";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
    
  )
}

export default App