import React from 'react'
import { SiClerk } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tcss.svg'
import bootstrap from '../../assets/bs.svg'
import next from '../../assets/next.svg'
import ts from '../../assets/typescript.svg'
import z from '../../assets/z.svg'
import motion from '../../assets/motion.svg'
import material from '../../assets/material.svg'
import heroui from '../../assets/heroui.svg'    
import firebase from '../../assets/firebase.svg'
import Lottie from "lottie-react";
import drone from '../../assets/drone.json'


const Skills = () => {
  return (
   <>
   <section className=" w-full h-[70vh] grid grid-cols-1 md:grid-cols-2   bg-gradient-to-b from-[#000000] via-[#000000] to-[#ff8fab] px-8 pt-24 pb-8">
    {/* col 1 */}
     <div className="flex justify-start items-start  gap-8  md:gap-12 lg:gap-32 ">
        <div className="text-white flex flex-col items-start justify-start gap-6">
           
               <h2 className="text-white flex items-center gap-1"><span><img className=" w-4 h-4 md:w-6 md:h-6" src={html} alt="html" /></span> HTML  </h2>
               <h2 className="text-white flex items-center gap-1"><span><img className=" w-4 h-4 md:w-6 md:h-6" src={css} alt="css" /></span> CSS  </h2>
               <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={js} alt="js" /></span > JavaScript  </h2>
               <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={ts} alt="ts" /></span> TypeScript  </h2>
               <h2 className="text-white flex items-center gap-1"><span><SiShadcnui className="w-4 h-4 md:w-6 md:h-6" /></span> Shadcn UI  </h2>
            
        </div>
        <div className="text-white flex flex-col items-start justify-start gap-6">
           
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={react} alt="html" /></span>React JS  </h2>
           <h2 className="text-white flex items-center gap-1"><span><SiNextdotjs className="w-4 h-4 md:w-6 md:h-6" /></span> Next JS </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={tailwind} alt="tailwind" /></span> Tailwind CSS </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={material} alt="ts" /></span> Material UI  </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={bootstrap} alt="bootstrap" /></span> BootStrap </h2>
        
    </div>
    <div className="text-white flex flex-col items-start justify-start gap-6">
           
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={firebase} alt="html" /></span> FireBase  </h2>
           <h2 className="text-white flex items-center gap-1"><span><SiClerk className="w-4 h-4 md:w-6 md:h-6" /></span> Clerk </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={motion} alt="motion" /></span> Motion React </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={heroui} alt="heroui" /></span> Hero UI  </h2>
           <h2 className="text-white flex items-center gap-1"><span><img className="w-4 h-4 md:w-6 md:h-6" src={z} alt="z" /></span> Zustand  </h2>
        
    </div>
     </div>

     {/* col 2 */}
     <div className="  hidden md:block  text-white">
     <Lottie
        animationData={drone}
        loop

      />
     </div>
   </section>
   </>
  )
}

export default Skills