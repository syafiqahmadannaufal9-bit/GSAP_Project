import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef();
  const videoTimelineRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767});

  useGSAP(() => {
    // Text animations
    const heroSplit = new SplitText('.title', {type: 'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type: 'chars, lines'});
  
    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
    gsap.from(heroSplit.chars, {
      yPercent:100,
      duration:1.8,
      ease: 'expo.out',
      stagger: 0.05
    })

    gsap.from(paragraphSplit.lines,{
      opacity:0,
      yPercent:100,
      duration:1.8,
      ease: 'expo.out',
      stagger: 0.05,
      delay: 1
    })

    // Leaf parallax
    gsap.timeline({
      scrollTrigger:{
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to('.right-leaf',{ y: 200}, 0)
    .to('.left-leaf',{ y: -200}, 0)

    const startValue = isMobile ? 'top 40%' : 'center 60%';
    const endValue = 'bottom bottom';

    // Video animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'video',
        endTrigger: '#cocktails',
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
        ease: 'none'
      })
    }

  }, []);


  return (
    <div className='hero-container'>
      {/* Video — pinned while scrolling */}
      <div className='vidio-wrapper'>
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Page 1 — Hero content */}
      <section id="hero" className='noisy'>
          <h1 className='title'>MONALISA</h1>

        <img src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className='left-leaf'
        />

        <img src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className='right-leaf'
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Clasic.</p>
              <p className='subtitle'>Sip the spirit <br />of summer</p>
            </div>

            <div className='view-cocktails'>
              <p className='subtitle'>Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes <br />— designed to delight your senses. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero