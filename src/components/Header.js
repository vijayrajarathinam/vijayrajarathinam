import React from "react";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header className="h-auto md:h-screen pt-28 overflow-hidden">
      <div className="w-4/5 mx-auto my-0 text-center h-auto md:h-screen sm:h-[68vh] md:h-full relative">
        {/* <h5 className="py-1">Hello I'm</h5>
        <h1 className="py-1 text-2xl md:text-4xl">Vijay Rajarathinam</h1>
        <h5 className="py-1 text-white text-opacity-60">Fullstack Developer</h5> */}
        <p className="text-primary font-Roboto leading-5 tracking-wider text-left py-2 text-lg">
          Hi, my name is{" "}
        </p>
        <h1 className="py-1 md:py-4 text-left font-semibold md:font-bold text-3xl md:text-6xl text-indigo-100 text-opacity-80">
          Vijay Rajarathinam.
        </h1>
        <h1 className="py-1 md:py-4 text-left font-semibold md:font-bold text-3xl md:text-6xl text-indigo-200 text-opacity-60">
          I build things for the web.
        </h1>
        <p className="py-2 md:py-4 w-full md:w-1/2 text-left text-indigo-200 text-opacity-60 leading-6 tracking-wider text-sm md:text-base">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>
        <div className="w-full md:w-1/2 flex py-7">
          <a href="#thingsibuilt" className="glitchB">
            Check out my Work
          </a>
        </div>
        <HeaderSocial />
        <a
          href="#contact"
          className="email font-Roboto hidden text-xs md:flex items-center gap-12 fixed -right-16 bottom-24 rotate-90 text-violet-300 tracking-widest text-opacity-80 "
        >
          vijaysrim2016@gmail.com
        </a>
      </div>
    </header>
  );
};

export default Header;
