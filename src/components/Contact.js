import React, { useState, useEffect } from "react";
import { MdMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  const [width, setWindowWidth] = useState(0);
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <section id="contact">
      <h5 className="py-1">Get In Touch</h5>
      <h2 className="py-1">Contact Me</h2>
      <div
        className="w-5/6 md:w-2/5 mx-auto my-0 grid gap-[12%] grid-cols-1"
        // style={{ gridTemplateColumns: width >= 680 ? "20% 60%" : "1fr" }}
      >
        {/* <div className="flex flex-col justify-center gap-4"> */}
        {/* <article className="bg-secondary bg-opacity-75 hover:bg-opacity-100 p-4 flex flex-col gap-2 items-center rounded-xl">
            <MdMail />
            <h4>Email</h4>
            <h5 className="text-xs text-white text-opacity-30">
              vijaysrim2016@gmail.com
            </h5>
            <a className="text-xs" href="mailto:vijaysrim2016@gmail.com">
              send a message
            </a>
          </article> */}
        {/* <article className="bg-secondary bg-opacity-75 hover:bg-opacity-100 p-4 flex flex-col gap-2 items-center rounded-xl">
            <BsWhatsapp />
            <h4>whatsApp</h4>
            <h5 className="text-xs text-white text-opacity-30">
              +91-xxxxxxxx15
            </h5>
            <a
              className="text-xs placeholder:text-xs tracking-wide"
              href="https://api.whatsapp.com/send?phone=10digit"
              target="_blank"
            >
              quick call
            </a>
           
          </article> */}
        {/* </div> */}
        <form action="" className="w-full px-8 flex flex-col">
          <input
            type="text"
            name="name"
            className="my-1 text-xs text-gray-500 placeholder:text-xs tracking-wide"
            placeholder="Your Full Name"
            required
          />
          <input
            className="my-1 text-xs text-gray-500 placeholder:text-xs tracking-wide"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            className="my-1 text-xs text-gray-500 placeholder:text-xs tracking-wide"
            placeholder="Your message"
            required
          />
          <button
            type="submit"
            className="btn btn-primary "
            style={{ selfAlign: "end" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
