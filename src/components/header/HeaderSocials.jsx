import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a style={{ fontSize: "0.9rem" }} href="https://www.linkedin.com/in/dixit-gogoi-9076981b2/" target="_blank">
        <BsLinkedin />
      </a>
      <a style={{ fontSize: "0.9rem" }} href="https://github.com/medixitgogoi" target="_blank">
        <FaGithub />
      </a>
      <a style={{ fontSize: "0.9rem" }} href="https://twitter.com/kargilDixit_32" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
