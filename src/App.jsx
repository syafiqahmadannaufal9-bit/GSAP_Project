import { ScrollTrigger } from 'gsap/all'
import { SplitText } from "gsap/SplitText";
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger, SplitText);


const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl text-indigo-300">Hello Nigga</h1>
      
    </div>
    
  )
}

export default App