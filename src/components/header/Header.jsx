import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
// import ME from "../../assets/me.png";
import ME from "../../assets/me-2.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Dixit Gogoi</h1>
        <h5 className="text-light">Front-End Developer</h5>

        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me-image" />
        </div>

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
