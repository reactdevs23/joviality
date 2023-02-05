import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Text } from "../../common.styled";
import CountUps from "./CountUp/CountUp";
import styles from "./style.module.css";
import "./style.css";
import Header from "../Header/Header";
import Pattern from "./Pattern/Pattern";

export const HeroSection = () => {
  const icons = [
    "/images/body-organ 1.svg",
    "/images/neuron 3.svg",
    "/images/neuron 2.svg",
    "/images/neuron 1.svg",
  ];

  return (
    <>
      <section className={styles.heroSectionContainer}>
        <Header />
        <div className={styles.heroSection}>
          <div className={styles.iconTitleTextWrapper}>
            <div className={styles.buttonContainer}>
              <a href="#/" className={styles.blogButton}>
                <span> Blog</span> <span>.</span> Introducing Best AI Therapist{" "}
                <BsArrowRightShort className={styles.arrow} />
              </a>
            </div>
            {icons.map((el, i) => (
              <div
                className={`${styles.iconContainer} iconContainer${i + 1}`}
                key={i}
              >
                <div className={`${styles.icon} icon${i + 1}`}>
                  <img src={el} alt="#" className={styles.icon} />
                </div>
              </div>
            ))}
            <h1 className={styles.title}>
              Stongest Components For <br className={styles.br} /> Good Mental
              Health
            </h1>
            <Text color="#BBBAAF" maxWidth="830px" className={styles.text}>
              All stress, anxiety, depression, is caused when we ignore who we
              are, and start living to please others.” To maintain wellbeing,
              individuals need to recognize their inner strengths.
            </Text>
            <div className={styles.buttonContainer}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={styles.button}
              >
                Sign Up for early access
              </a>
            </div>
          </div>

          <CountUps />
        </div>{" "}
        <Pattern />
      </section>
      <img src="/images/hand.svg" alt="#" className={styles.image} />
    </>
  );
};
