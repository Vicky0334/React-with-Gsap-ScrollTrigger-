import {useGSAP } from '@gsap/react';
import{ ScrollTrigger} from 'gsap/ScrollTrigger'
import gsap from 'gsap';

import React, { useRef } from 'react'

const Page2 = () => {
    const boxRef =useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from(boxRef.current,{
            y:200,
            opacity:0,
        duration:1,
    scrollTrigger:{
        trigger:boxRef.current,
        scroller:"body",
        start:'top 80%',
        end:'bottom 80%',
        toggleActions:'play none none reverse',
        scrub:1,
        onUpdate:(self)=>{
            console.log(self)
        },
        onEnter:()=>{
            console.log('enter')
        },
        onLeave:()=>{
            console.log('leave')
        },
        onEnterBack:()=>{
            console.log('enter back')
        },
        onLeaveBack:()=>{
            console.log('leave back')
        },
        onToggle:()=>{
            console.log('toggle')
        },
        onResume:()=>{
            console.log('resume')
        },
        onPause:()=>{
            console.log('pause')
        },
        onRefresh:()=>{
            console.log('refresh')
        },
        onUpdate:()=>{
            console.log('update')
        },
    }        })
    })
  return (
    <div className='w-full h-screen bg-green-500 flex items-center justify-center'>
        
        <div className='box ' ref={boxRef}></div>
    </div>
  )
}

export default Page2
