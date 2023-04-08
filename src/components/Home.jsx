import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";
import hero from "../assets/hero-img.jpg";

const Home = () => {
  return (


    <div name="home" className="h-screen w-full bg-[#0a192f] justify-center">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-pink-700">Hi, My name is</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#ccd6f6] name-color ">
            Rushikesh Kothawade
          </h1>
          <h2 className="text-2xl sm:text-5xl mt-2 font-bold text-[#8892b0]">
            I'm a{" "}
            <span style={{ color: "#B52951", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Developer.", "Learner.", "Data Analyst."]}
                loop={500}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1000}
            
              />
            </span>
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[750px] justify-self-start">
            As a Web Developer and Data Analyst, I specialize in
            designing and developing web applications while leveraging
            data-driven insights to optimize processes and deliver value to
            businesses.
          </p>

          <div>
            <Link to="work" smooth={true} duration={500}>
              
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center justify-self-autor hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={hero}
            alt="my profile"
            className="rounded-2xl mx-auto md:w-full w-auto scale-0.5 custom-size-img justify-center"
          />
        </div>
        </div>
     
   

      <FloatingWhatsApp
        phoneNumber="919511606016"
        accountName="Rushikesh ✅"
        avatar={Logo}
        size={30}
        allowEsc
        allowClickAway
        notification
        notificationSound
        chatMessage="Hey! Hope you are doing well. Rushikesh this side! How may I help you?😊"
      />
    </div>
   
  );
};

export default Home;
