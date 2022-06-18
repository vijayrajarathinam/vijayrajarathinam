import React from "react";

const Whatsnext = () => {
  return (
    <section id="contact">
      <div className="w-4/5 mx-auto my-0 flex flex-col items-center">
        <p className="pr-1 font-normal font-Roboto text-primary">
          03. what’s next?
        </p>
        <h3 className="py-2 md:py-4 text-left font-semibold md:font-bold text-3xl md:text-6xl text-indigo-100 text-opacity-80">
          Get In Touch
        </h3>
        <p className="leading-5 tracking-wider text-center w-2/3 md:w-1/2 text-sm py-1 px-2 text-indigo-200 text-opacity-60">
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
        </p>
        <a
          href="mailto:vijaysrim2016@gmail.com"
          className="py-5 mt-10 mb-28 md:my-5 text-primary border cursor-pointer border-primary px-7 rounded hover:bg-primary hover:bg-opacity-10 font-Roboto hover:text-primary "
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Whatsnext;
