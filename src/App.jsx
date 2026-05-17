import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocktails from "./components/cocktails.jsx";
gsap.registerPlugin(ScrollTrigger);


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
    
  )
}

export default App