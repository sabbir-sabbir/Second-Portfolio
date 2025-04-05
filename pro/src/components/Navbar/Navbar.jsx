import React from 'react'
import logo from '../../assets/logo.svg'
import {Link} from 'react-scroll';
import {motion} from "motion/react";

const Navbar = () => {
  return (
   <>
   <nav className=" sticky backdrop-blur-lg bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-800 bg-opacity-20 border border-white/20 shadow-lg w-full h-auto py-1 px-8    flex justify-between items-center" id="nav">
       <motion.div 
       animate={{
        x: [1000, 800, 600, 500, 300, 200, 0],
       
       }}
       transition={{
        duration: 2,
        ease: 'anticipate'
       }}
       >
       <img className="w-12 h-12" src={logo} alt="Logo" />
       </motion.div>
        


        {/* second div */}
        <div className="flex items-center gap-6">
        <Link className="text-white font-poppins  hover:cursor-pointer" to='contact' smooth={true} offset={0} duration={500}>Contact</Link>
        <Link className="text-white font-poppins  hover:cursor-pointer" to='write' smooth={true} offset={0} duration={500}>Write Me</Link>
        </div>
       
   </nav>
   </>
  )
}

export default Navbar