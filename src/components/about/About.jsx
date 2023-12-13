import React from 'react'
import './about.css'
import ME from '../../assets/me-3.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id='about'>
            <motion.h5
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >Get to know</motion.h5>

            <motion.h2
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >About Me</motion.h2>

            <div className="container about__container">

                <motion.div className="about__me-image"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <img src={ME} alt="About" />
                </motion.div>

                <motion.div className="about__content"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <div className="about__cards">
                        <motion.article className="about__card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <h6>Fresher level</h6>
                        </motion.article>

                        <motion.article className="about__card"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <h6>7+ completed</h6>
                        </motion.article>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        As a passionate and eager Front-End Developer with a strong foundation in front-end technologies, I'm currently expanding my skill set to encompass full-stack development, aiming to master both front-end and back-end technologies to build robust and interactive web solutions. I'm ready to collaborate with like-minded professionals, take on challenging projects, and explore the endless possibilities of creating seamless online experiences.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className='about__highlight'
                    >
                        If your requirements match my profile, click the button below for further discussion 👇
                    </motion.p>
                    <motion.a href="#contact" className="btn btn-primary animateButton"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >
                        Let's Talk
                    </motion.a>
                </motion.div>

            </div>
        </section>
    )
}

export default About



