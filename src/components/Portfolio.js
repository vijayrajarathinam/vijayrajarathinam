import React from "react";

const portfolios = [
  {
    img: "./project2.png",
    title: "Customizing Onboarding Forms",
    desc: "Fully functional and customizable onboarding form portal, Drag and Drop your questions in a matrix grid and start onboarding individual client with their unique links",
    link: "https://vijayrajarathinam.github.io/form-builder",
    code: "https://github.com/vijayrajarathinam/form-builder",
    winner: true,
  },
  {
    img: "./project1.png",
    title: "Glassmorphic Admin Panel",
    desc: " A glassy mobile responsive website, vibrant with colors and functional graph. Animation is the key for this interface, so please don't just visit it, try clicking each items.",
    link: "https://vijayrajarathinam.github.io/glassmorphicDashboard/",
    code: "https://github.com/vijayrajarathinam/glassmorphicDashboard",
  },
  {
    img: "./project5.png",
    title: "Covid Tracker",
    desc: "Real time, api stream controlled, functional Covid Tracker. The UI is customized to handle the streaming information",
    link: "https://vijayrajarathinam.github.io/react-covid-tracker/",
    code: "https://github.com/vijayrajarathinam/react-covid-tracker",
  },
  {
    img: "./project3.png",
    title: "Material UI Chat app",
    desc: "Responsive Chat app design using mui. Segregating and Integrating the component as chunks based on the type of display user has.",
    link: "https://vijayrajarathinam.github.io/chat",
    code: "https://github.com/vijayrajarathinam/chat",
  },
  {
    img: "./project4.png",
    title: "Fanastic Meme (Game - landscape display required)",
    desc: "A Web canvas game developed in React using Phaser engine. A small game like demo for 2D open world metaverse that is in progress.",
    link: "https://vijayrajarathinam.github.io/fantastic-meme/",
    code: "https://github.com/vijayrajarathinam/fantastic-meme",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="py-1">My Recent Works</h5>
      <h2 className="py-1">Portfolio</h2>
      <div className="w-4/5 sm:w-[90%] md:w-4/5 mx-auto my-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-10">
        {portfolios.map((_, i) => (
          <article
            key={i}
            className="bg-secondary bg-opacity-75 hover:bg-opacity-100 rounded-lg relative overflow-hidden"
          >
            {_?.winner ? (
              <div className="offspan">!! Winner !!</div>
            ) : (
              <React.Fragment />
            )}
            <img
              src={_.img}
              style={{ height: "180px" }}
              className="w-full object-cover h-30 rounded-t-lg"
            />
            <div className="p-4 flex flex-col justify-between">
              <h3 className="py-2 tracking-wider leading-5">{_.title}</h3>
              <p className="text-xs pt-2 pb-4 px-1 leading-5 tracking-wider  text-white text-opacity-70">
                {_.desc}
              </p>
              <div className="flex items-center gap-2 justify-start ">
                <a
                  className="btn text-sm py-2 px-3"
                  href={_.code}
                  target="_blank"
                >
                  Get Code
                </a>
                <a
                  className="btn btn-primary text-sm py-2 px-3"
                  href={_.link}
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
