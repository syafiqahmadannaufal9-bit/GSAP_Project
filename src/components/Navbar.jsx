import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks } from "../../constants/index.js";

const Navbar = () => {

   useGSAP(() => {
    const navTween = gsap.timeline({
        scrollTrigger: {
            trigger: "nav",
            start: "bottom top",
            scrub: true,
        },
    });

    navTween.to("nav", {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.out",
    });
   })


  return (
    <nav>
    <div>
      <a href="#home" className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className='w-10 h-10'/>
        <p>Velvet Pour</p>
      </a>
     <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
     </ul>
    </div>
    </nav>
  )
}

export default Navbar