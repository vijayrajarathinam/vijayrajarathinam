import React, { useEffect, useRef } from "react";

const SocialIcon = ({ icon: Icon, link }) => {
  const aRef = useRef(null);

  useEffect(() => {
    aRef.current.addEventListener("mousemove", (evt) => {
      //     // const x = e.layerX - 60,
      //     //   y = e.layerY - 60;
      const x = evt.layerX - 60;
      const y = evt.layerY - 60;
      const bg = evt.target.querySelector(".bg");
      const i = evt.target.querySelector(".bx");
      bg.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
      i.style.transform = `translate(${x / 4}px, ${y / 4}px)`;

      //     const bg = e.target.querySelector(".bg"),
      //       bx = e.target.querySelector(".bx");

      //     // const px = ((e.movementX - 50) / 50) * 10;
      //     // const py = ((e.movementY - 50) / 50) * 10;
      //     // var e = event || window.event;
      //     const _x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      //     const _y = e.offsetTop + Math.floor(e.offsetHeight / 2);

      //     const px = e.clientX - _x;
      //     const py = (e.clientY - _y) * -1;
      //     console.log(px, py, _x, _y);
      //     // bg.style.transform = `translate(${px / 1}px,${py / 1}px)`;
      //     bx.style.transform = `translate(${px}%,${py}%)`;
    });

    aRef.current.addEventListener("mouseenter", (evt) => {
      //     const bg = e.target.querySelector(".bg"),
      //       bx = e.target.querySelector(".bx");
      //     bg.style.transition = "all .15s ease";
      //     bx.style.transition = "all .15s ease";
      //     setTimeout(() => {
      //       bg.style.transition = "";
      //       bx.style.transition = "";
      //     }, 150);
      const bg = evt.target.querySelector(".bg");
      const i = evt.target.querySelector(".bx");
      bg.style.transition = "all .15s ease";
      i.style.transition = "all .15s ease";
      setTimeout(() => {
        bg.style.transition = "";
        i.style.transition = "";
      }, 150);
    });

    aRef.current.addEventListener("mouseleave", (evt) => {
      //     const bg = e.target.querySelector(".bg"),
      //       bx = e.target.querySelector(".bx");
      //     bg.style.transition = "all .25s ease";
      //     bx.style.transition = "all .25s ease";
      //     bg.style.transform = `translate(-50%,-50%)`;
      //     bx.style.transform = `translate(-50%,-50%)`;
      //     setTimeout(() => {
      //       bg.style.transition = "";
      //       bx.style.transition = "";
      //     }, 250);
      const bg = evt.target.querySelector(".bg");
      const i = evt.target.querySelector(".bx");
      bg.style.transition = "all .25s ease";
      i.style.transition = "all .25s ease";
      bg.style.transform = `translate(${0}px, ${0}px)`;
      i.style.transform = `translate(${0}px, ${0}px)`;

      setTimeout(() => {
        bg.style.transition = "";
        i.style.transition = "";
      }, 250);
    });
  }, []);

  return (
    <a
      ref={aRef}
      href={link}
      target="_blank"
      className="text-white relative z-[2] "
    >
      <Icon className="bx absolute z-[1]" />
      <div className="bg rounded-2xl absolute bg-sky-700 bg-opacity-70" />
    </a>
  );
};

export default SocialIcon;
