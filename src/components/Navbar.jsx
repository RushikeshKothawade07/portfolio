import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo1.png";
import { Link } from "react-scroll";
import "./Nav";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "work",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 ,y-10 bg-[#0a192f] text-gray-300 z-10">
      <div>
        <img
          className=" navbar-logo mx-0 my-0h-full w-full object-contain"
          src={Logo}
          alt="Logo Image"
          style={{
            width: "100px",
            height: "auto",
            color: "white",
            marginTop: "25px",
          }}
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 pr-4 text-gray-500">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="py-6 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 text-4xl"
          >
            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 pr-4">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] pr-4 hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full  text-gray-300"
              href="https://www.linkedin.com/in/rushikesh-kothawade07/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/RushikeshKothawade07"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1PcYKLSVzL1AP02-Z9kBs5DOZ04exexg_/view?usp=share_link"
              target="_blank"
              download="https://drive.google.com/file/d/1PcYKLSVzL1AP02-Z9kBs5DOZ04exexg_/view?usp=share_link"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
