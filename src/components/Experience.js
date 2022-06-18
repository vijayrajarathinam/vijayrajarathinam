import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5 className="py-1">Whats Skill's I have </h5>
      <h2 className="py-1"> My Experience</h2>
      <div className="w-4/5 mx-auto my-0 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-secondary py-5 px-10 rounded-xl cursor-pointer bg-opacity-75 hover:bg-opacity-100">
          <h3 className="py-2 text-center">Frontend Development</h3>
          <div className="grid grid-cols-2 gap-8 p-4">
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>HTML</h4>
                <small className="text-white text-opacity-50">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>CSS</h4>
                <small className="text-white text-opacity-50">Experience</small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>React</h4>
                <small className="text-white text-opacity-50">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>Javascript</h4>
                <small className="text-white text-opacity-50">Experience</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>Tailwind</h4>
                <small className="text-white text-opacity-50">Experience</small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>D3.js</h4>
                <small className="text-white text-opacity-50">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="bg-secondary py-5 px-10 rounded-xl cursor-pointer bg-opacity-75 hover:bg-opacity-100">
          <h3 className="py-2 text-center">Backend Development</h3>
          <div className="grid grid-cols-2 gap-8 p-4">
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>NodeJS</h4>
                <small className="text-white text-opacity-50">
                  Intermediate
                </small>
              </div>
            </article>
            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>MongoDB</h4>
                <small className="text-white text-opacity-50">
                  Intermediate
                </small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4 className="leading-5">Google Cloud</h4>
                <small className="text-white text-opacity-50">Experience</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>ExpressJS</h4>
                <small className="text-white text-opacity-50">Experience</small>
              </div>
            </article>

            <article className="flex gap-4">
              <BsPatchCheckFill className="text-primary" />
              <div className="flex flex-col gap-1">
                <h4>DEVOPS</h4>
                <small className="text-white text-opacity-50">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
