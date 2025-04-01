import React from 'react'
import circuit from '../../assets/lp.json';
import Lottie from "lottie-react";

const Expertise = () => {
  return (
  <section className="w-full h-auto bg-gradient-to-r from-[#14213d] via-purple-700 to-pink-500/65 px-8 py-8 ">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 items-center justify-start mt-16">
       <div>
        <Lottie
                animationData={circuit}
                loop
                className="object-cover "
  
              />
       </div>

       {/* 2 col */}
       <div className="flex flex-col justify-start items-start ">
        <div>
            <h1 className=" text-2xl  md:text-3xl lg:text-5xl font-semibold tracking-wide font-poppins text-[#90e0ef]">Experience & <span className="font-light bg-white px-2 text-[#ff758f]">Goal</span> </h1>
        </div>
        <div className="mt-8">
            <p className=" text-[16px] lg:text-[18px] font-poppins text-zinc-300">I'm a passionate front-end developer specializing in React.js, Next.js, and Tailwind CSS.  I have hands-on experience building responsive websites, e-commerce sites, and personal portfolios. With a keen eye for design and performance, I ensure seamless user experiences across all devices. "</p>
            <p className="mt-5 font-poppins text-gray-300">My goal is to become a full-stack web developer, mastering both front-end and back-end technologies to build complete, scalable applications. I'm also keen on exploring AI, machine learning, and cloud computing to integrate intelligent solutions into web development. I believe continuous learning and innovation are key to staying ahead in the tech industry, and I'm excited about the journey ahead!</p>
        </div>
       </div>



    </div>

  </section>
  )
}

export default Expertise