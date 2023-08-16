import React from "react";
import "./header.css";
import { motion } from "framer-motion";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/cv.pdf";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <HeaderSocials />

        <div className="header__content">

          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to
          </motion.h2>

          <h3>My Personal Portfolio!</h3>

          <h4>Hello👋, I'm</h4>

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Dixit Gogoi
          </motion.h1>

          <h4>Front End Developer</h4>

          <motion.a href={CV} download className="header__btn"
            initial={{ translateX: -400, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Get resume
          </motion.a>

          <motion.a href="#contact" className="header__btn"
            initial={{ translateX: 400, opacity: 0 }}
            animate={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hire me
          </motion.a>

        </div>

        <motion.a href="#contact" className="scroll__down"
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 90 }}
          transition={{ duration: 0.5 }}
        >
          Scroll down
        </motion.a>
        
      </div>
    </header>
  );
};

export default Header;
