import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import SocialIcon from "./SocialIcon";
const HeaderSocial = () => {
  return (
    <div className="socials hidden md:flex flex-col items-center fixed left-2 bottom-1">
      <SocialIcon icon={BsLinkedin} link="https://linkedin.com" />

      <SocialIcon icon={BsGithub} link="https://github.com/vijayrajarathinam" />

      <SocialIcon
        icon={BsYoutube}
        link="https://www.youtube.com/channel/UCyNwcXsxyLgTdoXsnD1ohMw"
      />
    </div>
  );
};

export default HeaderSocial;
