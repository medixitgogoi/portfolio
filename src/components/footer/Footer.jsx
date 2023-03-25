import React from 'react'
import "./footer.css"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">DIXIT GOGOI</a>

            <ul className="permalinks">
                <li><a href="#">Home</a><span>|</span></li>
                <li><a href="#about">About</a><span>|</span></li>
                <li><a href="#contact">Contact</a><span>|</span></li>
                <li><a href="#experience">Experience</a><span>|</span></li>
                <li><a href="#portfolio">Portfolio</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/dixit-gogoi-9076981b2/" target="_blank">
                    <BsLinkedin />
                </a>
                <a href="https://github.com/medixitgogoi" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://twitter.com/kargilDixit_32" target="_blank">
                    <FaTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; DIXIT All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
