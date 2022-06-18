import React from "react";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5 className="py-1">What I Offer</h5>
      <h2 className="py-1">Services</h2>
      <div className="w-4/5 mx-auto my-0 grid grid-cols-1 md:grid-cols-3 gap-3">
        <article className="bg-secondary rounded-md cursor-pointer bg-opacity-75 hover:bg-opacity-100">
          <div className="bg-primary px-4 py-5 rounded-t-md">
            <h3 className="text-center">UI/UX Design</h3>
          </div>
          <ul className="px-4 py-5">
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>
        <article className="bg-secondary rounded-md cursor-pointer bg-opacity-75 hover:bg-opacity-100">
          <div className="bg-primary px-4 py-5 rounded-t-md">
            <h3 className="text-center">Web Development</h3>
          </div>
          <ul className="px-4 py-5">
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className=" leading-3 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>
        <article className="bg-secondary rounded-md cursor-pointer bg-opacity-75 hover:bg-opacity-100">
          <div className="bg-primary px-4 py-5 rounded-t-md">
            <h3 className="text-center">Cloud and CI/CD Automation</h3>
          </div>
          <ul className="px-4 py-5">
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>

            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
            <li className="flex items-center gap-4 py-2">
              <BiCheck className="w-6" />
              <p className="leading-5 tracking-wwider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
