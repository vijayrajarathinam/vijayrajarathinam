import React from "react";
// import { BsGithub } from "react-icons/bs";
// import { MdOutlineOpenInNew } from "react-icons/md";
import useMediaQuery from "./hooks/useMediaQuery";
import LeftWorkCard from "./LeftWorkCard";
import ProjectCard from "./ProjectCard";
import RightWorkCard from "./RightWorkCard";

const portfolios = [
  {
    img: "./project2.png",
    title: "Customizable Onboarding Forms",
    desc: `This app is a <span class=" text-primary">hackathon winner</span>. Fully functional and customizable onboarding portal. <span class=" text-primary">Animate</span>, <span class=" text-primary">Drag</span> and <span class=" text-primary">Drop</span> your question's into a matrix grid and start onboarding your individual client with unique links and client specific questions`,
    link: "https://vijayrajarathinam.github.io/form-builder",
    code: "https://github.com/vijayrajarathinam/form-builder",
    skills: ["react", "redux", "firebase", "react-DnD", "framermotion"],
  },
  {
    img: "./project3.gif",
    title: "Ecommerce - 3D Product visualizer",
    desc: "Ecommerce Application having WebGL based product page with product customization options for <span class='text-primary'>color, size</span> and <span class='text-primary'>texture</span>.<br/> <span class='text-primary'>Light</span>s exposure, <span class='text-primary'>Camera</span> positioning, and triggering the correct <span class='text-primary'>Action</span>s are handled completely in JS ",
    link: "https://vijayrajarathinam.github.io/glassmorphicDashboard/",
    code: "https://github.com/vijayrajarathinam/glassmorphicDashboard",
    skills: ["three.js", "react-three-fiber", "MERN", "google app engine"],
  },

  {
    img: "./project4.png",
    title: "Open world web game",
    desc: "A POC version of open world <span class='text-primary'>metaverse</span> game I worked on, for a client using <span class='text-primary'>phaser game engine</span>. Making <span class='text-primary'>ICO</span> to new users and mining <span class='text-primary'> ERC20 </span> tokens and save it in user digital wallet",
    link: "https://vijayrajarathinam.github.io/fantastic-meme/",
    code: "https://github.com/vijayrajarathinam/fantastic-meme",
    skills: ["next.js", "phaser.io", "moralis.io", "web3"],
  },
];
const ThingsIBuilt = () => {
  const isLarge = useMediaQuery("(min-width: 480px)");
  return (
    <section id="thingsibuilt">
      <div className="w-4/5 mx-auto my-0">
        <p className="text-indigo-100 text-opacity-80 text-xl font-semibold py-0 md:py-10">
          <span className="pr-1 font-normal font-Roboto text-primary">02.</span>{" "}
          Some Things I’ve Built
        </p>
        {isLarge
          ? portfolios.map((port, i) => {
              if (i % 2 === 0) return <LeftWorkCard key={i} {...port} />;
              else return <RightWorkCard key={i} {...port} />;
            })
          : portfolios.map((port, i) => <ProjectCard key={i} {...port} />)}
      </div>
    </section>
  );
};

export default ThingsIBuilt;
