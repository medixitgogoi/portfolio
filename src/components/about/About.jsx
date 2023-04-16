import React from 'react'
import './about.css'
import ME from '../../assets/about-me-2.png'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>
            <div className="container about__container">

                {/* <div className="about__me">
                </div> */}

                <div className="about__me-image">
                    <img src={ME} alt="About image" />
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <h6>Fresher level</h6>
                        </article>
                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Projects</h5>
                            <h6>5+ completed</h6>
                        </article>
                    </div>
                    <p>A meticulous and organized individual seeking an Entry-level position in Software Industry, preferably in the field of
                        Front-End Development. Strong ability to handle complex projects and work in a team. Innovative, creative, willing to
                        contribute ideas and upskill myself along with my peers.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About
