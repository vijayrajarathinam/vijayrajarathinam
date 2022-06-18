import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";

const ProjectCard = ({ img, title, desc, skills, link, code }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(45deg,
        rgba(30,31,56, 0.95),
        rgba(30,31,56, 0.95)), url(${img})`,
        backgroundSize: "auto",
      }}
      className="w-full py-1 px-5 my-16 bg-tertiary bg-opacity-75 rounded-lg shadow-material"
    >
      <p className="text-indigo-100 text-opacity-80 text-xl font-semibold py-1">
        {title}
      </p>
      <div
        dangerouslySetInnerHTML={{ __html: desc }}
        className="leading-7 tracking-wider py-7  text-violet-100 text-opacity-80 text-sm  text-left "
      />
      <p className="text-sm text-primary font-Roboto">skills</p>
      <div className="font-Roboto text-xs text-violet-100/80 py-1">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-1 clear-both whitespace-nowrap overflow-hidden inline-block"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="flex items-center font-Roboto gap-5 py-2">
        {code ? (
          <a href={code} target="_blank">
            <BsGithub className="text-indigo-100/80 text-2xl" />
          </a>
        ) : (
          <React.Fragment />
        )}
        {link ? (
          <a href={link} target="_blank">
            <MdOutlineOpenInNew className="text-indigo-100/80 text-2xl" />
          </a>
        ) : (
          <React.Fragment />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
