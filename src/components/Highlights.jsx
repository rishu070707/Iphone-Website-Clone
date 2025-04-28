import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { rightImg, watchImg } from '../utills';
import VideoCrousel from './VideoCrousel';
const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {opacity:1 , y:0})
    gsap.to(".link",{opacity:1 ,y:0 , duration:1, stagger:0.25})
  },[])
  return (
    <section id="Highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc" > 
     <div className="scree-max-width">
       <div className="mb-12   md:flex full items-end justify-between">
        <h1 id="title" className="section-heading">
          Get the Highlights.
        </h1>
        <div className="flex flex-wrap item-end gap-5">
          <p className="link">
           Watch the Film
           <img src={watchImg} alt="watch" className="ml-2"/>
          </p>
          <p className="link">
           Watch the event
           <img src={rightImg} alt="right" className="ml-2"/>
          </p>
        </div>
       </div>
       <VideoCrousel/>
     </div>
    </section>
  )
}

export default Highlights