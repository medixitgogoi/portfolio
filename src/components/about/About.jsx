import React from 'react'
import './about.css'
import ME from '../../assets/me-2.png'
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
                    <img src={ME} alt="About image" />
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
                            <h6>5+ completed</h6>
                        </motion.article>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >A meticulous and organized individual seeking an Entry-level position in Software Industry, preferably in the field of
                        Front-End Development. Strong ability to handle complex projects and work in a team. Innovative, creative, willing to
                        contribute ideas and upskill myself along with my peers.
                    </motion.p>
                    <motion.a href="#contact" className="btn btn-primary"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                    >Let's Talk</motion.a>
                </motion.div>

            </div>
        </section>
    )
}

export default About



