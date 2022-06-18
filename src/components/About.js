import React from "react";
import { BsPlayFill } from "react-icons/bs";
import useMeasure from "react-use-measure";

const About = () => {
  const [ref, { height, width }] = useMeasure();

  return (
    <section id="about">
      <div className="w-4/5 mx-auto my-0">
        <p className="text-indigo-100 text-opacity-80 text-xl font-semibold">
          <span className="pr-1 font-normal font-Roboto text-primary">01.</span>{" "}
          About Me
        </p>
        <div className="grid grid-cols-[1fr] md:grid-cols-3 gap-12">
          <div className="col-span-1 md:col-span-2">
            <p className="leading-5 tracking-wider text-indigo-200 text-opacity-80 text-sm py-2">
              Hello! My name is Vijay and I enjoy creating things that live on
              the internet. My interest in web development started back in 2016
              when I started my carrier by building custom Wordpress and PHP
              solutions — turns out solving real world use-cases taught me a lot
              about Web Development.
            </p>
            <p className="leading-5 tracking-wider text-indigo-200 text-opacity-80 text-sm py-2">
              Fast-forward to today, and I’ve had the privilege of work history
              at a start-up, a huge corporation, and a student-led design
              studio. My main focus these days is building accessible, design
              systems and Micro frontend apps in the industry.
            </p>
            <p className="leading-5 tracking-wider text-indigo-200 text-opacity-80 text-sm py-2">
              I also keep on publishing youtube videos that covers everything
              you need to build a web app using Node & React.
            </p>
            <p className="leading-5 tracking-wider text-indigo-200 text-opacity-80 text-sm pt-2 pb-1">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 text-xs gap-5 px-4 py-8">
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  JavaScript (ES6+)
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  TypeScript
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  React
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  Modular Federation
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  MERN
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  GCP
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  Three.js
                </h4>
              </article>
              <article className="flex gap-1 items-center md:gap-2">
                <BsPlayFill className="text-primary" />
                <h4 className="text-indigo-200 text-opacity-80 font-Roboto">
                  D3.js
                </h4>
              </article>
            </div>
          </div>
          <div className="col-span-1 w-3/4 md:w-full mx-0 my-auto md:mr-8 md:m-0 aspect-square rounded relative group cursor-pointer">
            <div
              style={{ width, height }}
              className={`bg-primary bg-opacity-50 hover:bg-opacity-0 z-30 absolute  left-0 top-0 transition-all duration-300 ease-in rounded`}
            />
            <img
              ref={ref}
              className="absolute z-20 rounded "
              src="./profile.jpg"
            />
            <div
              style={{ width, height }}
              className=" rounded overflow-hidden origin-center absolute translate-x-5 translate-y-5 group-hover:translate-x-2 group-hover:translate-y-2 border-2 border-primary transition-all duration-300 ease-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
