import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo , smallHeroVideo } from '../utills';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc,setVideoSrc]=useState (window.innerWidth<760 ? smallHeroVideo : heroVideo)
  const handlevideoSrcset = () =>{
    if (window.innerWidth < 760){
        setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener('resize',handlevideoSrcset);
    return () =>{
    window.removeEventListener('resize',handlevideoSrcset);
    }
  } , [] )
  useGSAP( () => {
    gsap.to('#hero',{ opacity : 1 , delay:2})
    gsap.to('#cta',{opacity:1, y:-50 ,delay:2})
  },[])
  return (
    <section className="w-full nav-height bg-balck relative">
        <div className="h-5/6 w-full flex-center flex-col">
          <p  id='hero'  className="hero-title">IPhone 15 pro</p>
          <div className="md:w-10/12 w-9/12">
          <video autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4'/>
          </video>

          </div>
        </div>
        <div id='cta' className="flex flex-col items-center opacity 0 translate-y-20">
          <a href ="#Highlights" className="btn">Buy</a>
          <p className="font-normal text-xl">
            from ₹16,694.12/month or ₹83,806.16
          </p>
        </div>
    </section>
  )
}

export default Hero 