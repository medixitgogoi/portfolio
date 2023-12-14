import React from 'react'
import "./footer.css"
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="footer">
            <motion.h1 href="#" className="footer__logo"
                initial={{ opacity: 0, scale: 2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >DIXIT GOGOI</motion.h1>

            <ul className="permalinks"
            >
                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#">Home</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#about">About</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#contact">Contact</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: 100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#experience">Experience</a><span>|</span></motion.li>

                <motion.li
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                ><a href="#portfolio">Portfolio</a></motion.li>
            </ul>

            <div className="footer__socials">

                <motion.a href="https://www.linkedin.com/in/dixit-gogoi-9076981b2/" target="_blank"
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <BsLinkedin />
                </motion.a>

                <motion.a href="https://github.com/medixitgogoi" target="_blank"
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaGithub />
                </motion.a>

                <motion.a href="https://twitter.com/kargilDixit_32" target="_blank"
                    initial={{ opacity: 0, translateY: -50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <FaTwitter />
                </motion.a>

            </div>

            <div className="footer__copyright">
                <h5>&copy; DIXIT All rights reserved.</h5>
            </div>

        </footer>
    )
}

export default Footer
