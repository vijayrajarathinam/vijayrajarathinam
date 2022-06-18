import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquare } from "react-icons/bi";
import { RiServerLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import classes from "./Navbar.module.scss";

const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    var $panel = document.querySelector("#panel");
    var $panelItems = document.querySelectorAll("#item");

    $panel.addEventListener("mouseout", function () {
      for (let i = 0; i < $panelItems.length; ++i) {
        $panelItems[i].classList.remove("zoom");
        $panelItems[i].classList.remove("bigger");
        $panelItems[i].classList.remove("smaller");
        $panelItems[i].classList.remove("smallest");
      }
    });

    for (let i = 0; i < $panelItems.length; ++i) {
      const $next = $panelItems[i]?.nextSibling;
      const $prev = $panelItems[i]?.previousSibling;
      $panelItems[i].onmouseover = function (e) {
        $next?.classList.toggle("zoom");
        $prev?.classList.toggle("zoom");
      };

      $panelItems[i].onmousemove = function (e) {
        const x = (e.offsetX / e.target.scrollWidth) * 100;

        if (x > 66) {
          $next?.classList.add("bigger");
          $prev?.classList.add("smaller");
          $next?.nextSibling?.classList.add("zoom", "smallest");
        } else if (x < 33) {
          $prev?.classList.add("bigger");
          $next?.classList.add("smaller");
          $prev?.previousSibling?.classList.add("zoom", "smallest");
        } else {
          $next?.classList.remove("smaller", "bigger");
          $prev?.classList.remove("smaller", "bigger");
          $next?.nextSibling?.classList.remove("zoom", "smallest");
          $prev?.previousSibling?.classList.remove("zoom", "smallest");
        }
      };
    }
  }, []);
  const onLinkclick = (link) => (e) => setActiveNav(link);
  return (
    <nav id="panel" className={classes.panel}>
      <a
        href="#"
        id="item"
        className={clsx(classes.item, activeNav === "#" ? classes.active : "")}
        onClick={onLinkclick("#")}
      >
        <AiOutlineHome className="" />
      </a>
      <a
        id="item"
        href="#about"
        className={clsx(
          classes.item,
          activeNav === "#about" ? classes.active : ""
        )}
        onClick={onLinkclick("#about")}
      >
        <AiOutlineUser className="" />
      </a>
      <a
        id="item"
        href="#thingsibuilt"
        className={clsx(
          classes.item,
          activeNav === "#thingsibuilt" ? classes.active : ""
        )}
        onClick={onLinkclick("#thingsibuilt")}
      >
        <BiBook className="" />
      </a>
      {/* <a
        id="item"
        href="#services"
        className={clsx(
          classes.item,
          activeNav === "#services" ? classes.active : ""
        )}
        onClick={onLinkclick("#services")}
      >
        <RiServerLine className="" />
      </a>
      <a
        id="item"
        href="#portfolio"
        className={clsx(
          classes.item,
          activeNav === "#portfolio" ? classes.active : ""
        )}
        onClick={onLinkclick("#portfolio")}
      >
        <CgWebsite className="" />
      </a> */}

      <a
        href="#contact"
        id="item"
        className={clsx(
          classes.item,
          activeNav === "#contact" ? classes.active : ""
        )}
        onClick={onLinkclick("#contact")}
      >
        <BiMessageSquare className="" />
      </a>
    </nav>
  );
};

export default NavBar;
