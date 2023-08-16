import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const HeaderSocials = () => {
  return (
    <motion.div className="header__socials"
      initial={{ opacity: 0, rotate: 90 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a style={{ fontSize: "0.9rem" }} href="https://www.linkedin.com/in/dixit-gogoi-9076981b2/" target="_blank">
        <BsLinkedin />
      </a>
      <a style={{ fontSize: "0.9rem" }} href="https://github.com/medixitgogoi" target="_blank">
        <FaGithub />
      </a>
      <a style={{ fontSize: "0.9rem" }} href="https://twitter.com/kargilDixit_32" target="_blank">
        <FaTwitter />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
