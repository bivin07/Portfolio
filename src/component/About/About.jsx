import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <div   >
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div   className={styles.aboutItemText}>
              <h3>MERN Developer</h3>
              <p>
              Hello! I'm a passionate MERN Stack Developer with a focus on building dynamic, high-performance web applications. I specialize in creating full-stack solutions using MongoDB, Express, React, and Node.js. With a solid foundation in JavaScript, I thrive on writing clean, scalable, and efficient code.
              </p>
            </div>
          </li>
  
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
        </div>
      </div>
    </section>
  );
};