import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import CV from "../../assets/cv.pdf";
// import ME from "../../assets/me-2.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        {/* <h5>Hello, I'm</h5>
        <h1>Dixit Gogoi</h1>
        <h5 className="text-light">Front-End Developer</h5>

        <CTA /> */}

        {/* <div className="me">
          <img src={ME} alt="me-image" />
        </div> */}

        <HeaderSocials />

        <div className="header__content">

          <h2>Welcome to</h2>
          <h2>My Personal Portfolio!</h2>

          {/* <p>
            A meticulous and organized individual seeking an Entry-level position in Software Industry, preferably in the field of
            Front-End Development. Strong ability to handle complex projects and work in a team. Innovative, creative, willing to
            contribute ideas and upskill myself along with my peers.
          </p> */}

          <h3>Hello👋, I'm</h3>
          <h1>Dixit Gogoi</h1>
          <h3>Front End Developer</h3>

          <a href={CV} download className="header__btn">
            Get resume
          </a>
          <a href="#contact" className="header__btn">
            Hire me
          </a>
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
