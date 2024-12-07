import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Bivin Devasia</h1>
          <p className={styles.description}>I'm a MERN STACK developer</p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <img
          src={getImageUrl("hero/icon2.png")}
          alt="Hero image of me"
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>

      {/* Marquee Section */}
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <img
            src={getImageUrl("skills/mdb.png")}
            alt="HTML"
            className={styles.marqueeIcon}
          />
          <img
            src={getImageUrl("skills/express.webp")}
            alt="CSS"
            className={styles.marqueeIcon}
          />
         
          <img
            src={getImageUrl("skills/react.png")}
            alt="React"
            className={styles.marqueeIcon}
          />
          <img
            src={getImageUrl("skills/node.jpg")}
            alt="Node.js"
            className={styles.marqueeIcon}
          />
      
        </div>
      </div>
    </>
  );
};
