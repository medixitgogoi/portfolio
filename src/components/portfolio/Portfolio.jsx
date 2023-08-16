import React from "react";
import "./portfolio.css";
import data from "./data";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <motion.h5
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >My Recent Work</motion.h5>

      <motion.h2
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >Portfolio</motion.h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }, index) => {
          return (

            <motion.article key={id} className="portfolio__item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </motion.article>

          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
