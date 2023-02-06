import React from "react";
import { Heading, Section, Text } from "../../common.styled";
import styles from "./style.module.css";

export const Exposure = () => {
  return (
    <Section className={styles.wrapper}>
      <div className={styles.exposure} style={{ color: "#fff" }}>
        <img src="/images/exposure.png" alt="#" className={styles.background} />
        <Heading>
          Gain Exposure to the <br /> Highest quality <br /> Curve and Convex
          pools.
        </Heading>
        <div className={styles.firstDiv}>
          <div className={`${styles.box1} ${styles.box}`}>
            <img src="/images/learning 1.svg" alt="#" className={styles.icon} />
            <Text className={styles.text}>
              Hands-off. <br /> No ongoing <br /> costs or <br /> maintainenace
            </Text>
          </div>
          <div className={`${styles.box2} ${styles.box}`}>
            <img src="/images/learning 2.svg" alt="#" className={styles.icon} />{" "}
            <Text className={styles.text}>
              Data-driven risk / reward <br /> assessments.
            </Text>
          </div>
        </div>
        <div className={styles.secondDiv}>
          <div className={styles.subdiv}>
            <div className={`${styles.box3} ${styles.box}`}>
              <img
                src="/images/learning 3.svg"
                alt="#"
                className={styles.icon}
              />{" "}
              <Text className={styles.text}>
                Secure and stable returns are <br /> prioritizrd over risky
                degen yields.
              </Text>
            </div>
            <div className={`${styles.box4} ${styles.box}`}>
              <img
                src="/images/learning 5.svg"
                alt="#"
                className={styles.icon}
              />{" "}
              <Text className={styles.text}>
                Secure and <br /> audited smart <br /> contracts.
              </Text>
            </div>
          </div>
          <div className={`${styles.box5} ${styles.box}`}>
            <img src="/images/learning 4.svg" alt="#" className={styles.icon} />{" "}
            <Text>
              Low correlation <br /> to BTC,ETH, DeFi <br /> blue chips & S&P{" "}
              <br /> 500.
            </Text>
          </div>
        </div>
      </div>
    </Section>
  );
};
