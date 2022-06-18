import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-5/6 hidden  mx-auto my-0 bg-transparent mt-5 pt-3 pb-5 text-center text-[0.9rem] sm:flex items-center justify-between">
      <a
        className="text-indigo-100 text-opacity-80  text-xl font-medium py-2"
        href="#"
      >
        Vijay Rajarathinam
      </a>
      {/* <ul className="flex py-3 gap-4 items-center justify-center w-full font-Poppins">
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#">
            Home
          </a>
        </li>
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#about">
            About
          </a>
        </li>
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#thingsibuilt">
            Work
          </a>
        </li>
        {/* <li>
          <a className="text-indigo-100 text-opacity-80 " href="#experience">
            Experience
          </a>
        </li>
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#portfolio">
            Portfolio
          </a>
        </li> 
        <li>
          <a className="text-indigo-100 text-opacity-80 " href="#contact">
            Contact
          </a>
        </li>
      </ul> */}
      <div className="flex py-3 gap-4 items-center justify-center ">
        <a
          className="text-indigo-100 text-opacity-80 text-lg"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="text-indigo-100 text-opacity-80 text-lg"
          href="https://github.com/vijayrajarathinam"
          target="_blank"
        >
          <BsGithub />
        </a>

        <a
          className="text-indigo-100 text-opacity-80 text-lg"
          href="https://www.youtube.com/channel/UCyNwcXsxyLgTdoXsnD1ohMw"
          target="_blank"
        >
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
