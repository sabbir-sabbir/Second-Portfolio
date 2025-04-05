import Lottie from "lottie-react";
import React from "react";
import certificate from "../../assets/Certificate of front end web development.pdf";
import coding from "../../assets/coding.svg";
import resume from "../../assets/resume.pdf";
import robot from "../../assets/robot.json";
import Expertise from "../Expertise/Expertise";
import Skills from "../Skills/Skills";
import Writeme from "../Writeme/Writeme";
import Footer from "../Footer/Footer";
import {motion} from "motion/react";

const Hero = () => {
  return (
    <>
      <section className="  w-full h-[96vh] bg-[url('https://images.unsplash.com/photo-1688834396398-3d0a0e69d26e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat px-8 py-5 ">
        <div className="  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 mt-14  ">
          {/* 1 col */}
          <div className="flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-3">
              <motion.h1
              animate={{
                x: [ 1000, 500, 600,  0],
                rotate: [0, 360, 360, 360, 360, 360, 360, 360,  0],
                scale: [1, 3.5, 1],

              }}
              transition={{
                duration: 2,
                ease: 'anticipate'
              }}
              className="tracking-wide font-poppins text-5xl font-semibold text-white ">
                Hi, I'M{" "}
              </motion.h1>
              <span className="tracking-wide font-poppins text-5xl font-bold bg-gradient-to-r from-[#fca311]/65 via-[#9a8c98] to-[#fca311]/75 bg-clip-text text-transparent">
                SABBIR
              </span>
            </div>
            <motion.div
            animate={{
              y: [1000 ,  600, 400, 250, 0],
              rotate: [0, 360, 360, 360, 360, 360, 360, 360,  0],
              scale: [1, 3.5, 4.5, 1.5, 1],

            }}
            transition={{
              delay: 0.5,
              duration: 4,
              ease: 'anticipate'
            }}
            className="flex justify-center items-center gap-2 mt-5">
              <h2 className="text-xl font-semibold font-poppins tracking-wider text-zinc-400">
                A Front-end
              </h2>
              <span className="font-orbitron tracking-wider text-[#fca311]">
                DEVELOPER
              </span>
              <span>
                <img className="w-6 h-6" src={coding} alt="logo" />
              </span>
            </motion.div>
            <div className="flex  justify-center items-center w-[70%] mt-5 ">
              <p className="text-[16px] font-poppins tracking-wide mt-2 text-zinc-400">
                I love Development & Provide Front-end web solutions. I always
                enjoy to learn something new & exciting
              </p>
            </div>

            <motion.div
            animate={{
              x: [1000, 0],
            }}
            transition={{
              duration: 2
            }}
            className="flex justify-center items-center gap-8 mt-16">
              <motion.button 
              whileTap={{
                scale: 0.1,
              }}
              className="bg-gradient-to-tl from-[#495057] via-[#7678ed]/25 to-[#343a40] w-[180px] py-2 font-poppins text-lime-100 hover:bg-gradient-to-t from-[#495057] via-[#7678ed]/25 to-[#343a40] hover:scale-110 duration-300 transition-all hover:text-zinc-500">
                <a href={resume} download="SABBIR_(Front-end Web-Devs)">
                  Find Resume
                </a>
              </motion.button>
              <motion.button
               whileTap={{
                scale: 0.1,
              }}
              
              className="bg-gradient-to-tl from-[#495057] via-[#f18701]/25 to-[#343a40]  w-[180px] py-2 font-poppins text-white hover:bg-gradient-to-b from-[#495057] via-[#f18701]/25 to-[#343a40]  hover:scale-110 duration-300 transition-all hover:text-zinc-500">
                <a href={certificate} download="SABBIR_(Front-end Web-Devs)">
                  Certification
                </a>
              </motion.button>
            </motion.div>
          </div>
          











          {/* 2 col */}
          <motion.div
            animate={{
              y: [0, 1000,  0],
            

            }}
            transition={{
              duration: 2,
            }}
            drag
           
            dragConstraints={{top: -100, left: -100, right: 100, bottom: 100}}
            className="hidden md:block absolute top-[200px] right-10"
          >
            <Lottie
              animationData={robot}
              loop
              className=" w-[450px] h-[450px] object-cover  "
            />
          </motion.div>
        </div>
      </section>
      <Expertise />
      <Skills />
      <Writeme />
      <Footer />
    </>
  );
};

export default Hero;
