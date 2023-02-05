import React from "react";

import { Heading, Section, Text } from "../../common.styled";
import styles from "./styles.module.css";

export const PerfectlyPolished = () => {
  return (
    <Section className={styles.box}>
      <div className={styles.boxWrapper}>
        <div className={styles.perfectlyPolishedContainer}>
          <Heading>Perfectly Polished . Every Time</Heading>
          <div className={styles.perfectlyPolished}>
            <div>
              <h3 className={styles.title}>
                Don’t just process words -{" "}
                <span className={styles.blur}>build</span>{" "}
                <span className={styles.blur}>results</span>
              </h3>

              <Text className={styles.text}>
                Craft brings structure to your documents - and gives you the
                tools and freedom to do it your way. Seamlessly combine images,
                text, media or tables for the perfect experience.
              </Text>
              <Text className={styles.text}>
                Drive deep understanding and engagement by allowing the reader
                to consume your document just as they would a website.
              </Text>
              <Text className={styles.text}>
                Add your brand and personal touches on top for the perfect
                document.
              </Text>
            </div>
            <img
              src="/images/perfectlyPolished.png"
              alt="#"
              className={styles.image}
            />
          </div>{" "}
        </div>{" "}
      </div>
    </Section>
  );
};
