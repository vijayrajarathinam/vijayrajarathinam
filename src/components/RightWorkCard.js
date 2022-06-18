import React from "react";
import { BsGithub } from "react-icons/bs";
import { MdOutlineOpenInNew } from "react-icons/md";

const RightWorkCard = ({ img, title, desc, skills, link, code }) => {
  return (
    <div className="grid grid-cols-2 pt-10 pb-20">
      <div className="flex h-max gap-10 flex-col justify-between items-start translate-x-5 z-40">
        <p className="text-indigo-100 text-opacity-80 text-xl font-semibold">
          {title}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          className="leading-7 tracking-wider py-7 pr-7 pl-4 text-violet-100 text-opacity-80 text-sm bg-secondary rounded-lg shadow-material text-left -translate-x-2"
        />
        <div className="flex items-center font-Roboto gap-5 text-xs text-violet-100/80">
          {skills.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
        {/* <div className="flex items-center font-Roboto gap-5">
          <a href={code} target="_blank">
            <BsGithub className="text-indigo-100/80 text-2xl" />
          </a>
          <a href={link} target="_blank">
            <MdOutlineOpenInNew className="text-indigo-100/80 text-2xl" />
          </a>
        </div> */}
      </div>
      <div className="rounded relative group cursor-pointer">
        <div className="bg-primary bg-opacity-50 hover:bg-opacity-0 z-30 absolute w-[512px] h-[309px] left-0 top-0 transition-all duration-300 ease-in rounded" />
        <img src={img} className="absolute z-20 rounded w-[512px] h-[309px] " />
      </div>
    </div>
  );
};

export default RightWorkCard;
