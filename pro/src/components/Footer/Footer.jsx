import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-scroll";
import robot from "../../assets/robot2.json";

const Footer = () => {
  const contacts = [
    {
      icon: "/github.svg",
      name: "GitHub",
      url: "https://github.com/sabbir-sabbir",
    },
    {
      icon: "/linkedin.svg",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sabbir-rahman-5aa368351/",
    },
    {
      icon: "/facebook.svg",
      name: "Facebook",
      url: "https://web.facebook.com/xyzsabbir1234",
    },
    {
      icon: "/instagram.svg",
      name: "Instagram",
      url: "https://www.instagram.com/iosabbir7890/",
    },
    {
      icon: "/email.svg",
      name: "mesabbir855@gmail.com",
      url: "mesabbir855@gmail.com",
    },
    {
      icon: "/number.svg",
      name: "01329393695",
      url: "01329393695",
    },
  ];

  return (
    <>
      <section
        className="w-full h-auto bg-zinc-800 px-8 py-24 flex flex-col items-start justify-start"
        id="contact"
      >
        <h1 className="text-center pb-5 text-white font-poppins font-medium">
          Contact Me via
        </h1>

        <div className="flex justify-between items-start ">
          <div className="grid grid-cols-3  gap-6 items-center pl-0 md:pl-24">
          {contacts.map((contact, index) => {
            
  // If it's an email address, create Gmail compose link
  const isEmail = contact.url.includes("@");
  const link = isEmail
    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.url}`
    : contact.url.startsWith("http")
    ? contact.url
    : `tel:${contact.url}`; 

  return (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 hover:underline"
    >
      <img src={contact.icon} alt={contact.name} width={20} />
      {contact.name}
    </a>
  );
})}
          </div>
          <div className=" absolute top-[2050px] right-10 hidden md:block">
            <Lottie animationData={robot} loop className="w-[450px] " />
          </div>
        </div>

        <div className=" pl-20 mt-12 flex items-center gap-16">
          <div class="flex items-center text-gray-600 text-sm">
            <span class="mr-1">&copy;</span>
            <span>2025 SABBIR RAHMAN. All rights reserved.</span>
          </div>
          <div>
            <Link
              className="text-white font-poppins  hover:cursor-pointer"
              to="nav"
              smooth={true}
              offset={0}
              duration={500}
            >
              <img className="w-12 h-12 animate-bounce" src="/up.svg" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
