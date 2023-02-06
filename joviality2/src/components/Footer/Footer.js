import React from "react";
import { Text, Section } from "../../common.styled";
import { FiArrowUpRight } from "react-icons/fi";
import styles from "./Footer.module.css";
import Pattern from "../HeroSection/Pattern/Pattern";

const Footer = () => {
  const data = [
    {
      title: "Product",
      items: [
        { name: "Join Waitlist", to: "#", go: true },
        { name: "Pricing", to: "#", go: "" },

        { name: "Changelog", to: "#", go: "" },
        { name: "Log in", to: "#", go: "" },
        { name: "Sign Up", to: "#", go: "" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About", to: "#", go: "" },
        { name: "Careers", to: "#", go: "" },

        { name: "Blog", to: "#", go: "" },
        { name: "Press Kit", to: "#", go: true },
        { name: "Contact Us", to: "#", go: true },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Terms of Service", to: "#", go: "" },
        { name: "Privacy Policy", to: "#", go: "" },

        { name: "Legal", to: "#", go: "" },
        { name: "FAQ", to: "#", go: true },
      ],
    },
    {
      title: "Follow Us",
      items: [
        { name: "Twitter", to: "#", go: true },
        { name: "Linkedin", to: "#", go: true },
        { name: "AngelList", to: "#", go: true },
      ],
    },
  ];
  return (
    <Section className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div>
            <h5 className={styles.title}>JOVIALITY</h5>
            <p className={styles.tagline}>© Joviality Tech LLC 2023</p>
            <Text className={styles.text}>
              Vestibulum iaculis mauris eu porttitor facilisis. Mauris malesuada
              mauris id rhoncus consequat. Duis mi enim, tincidunt eget ultrices
              in, iaculis ac neque. Quisque cursus non mi ac varius. Quisque
              maximus metus ac orci efficitur, a tincidunt est euismod.
              Phasellus convallis nunc eget tortor feugiat ornare. Mauris enim
              libero, egestas a sodales vel, consequat ac purus.
            </Text>
            <div className={styles.taglineAndCircle}>
              <p className={styles.circle}></p>{" "}
              <p className={styles.tagline}>All systems operational</p>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            {data.map((el, i) => (
              <div key={i}>
                <h6 className={styles.heading}>{el.title}</h6>
                {el.items.map((item, index) => (
                  <div className={styles.itemContainer} key={index}>
                    <a
                      href="#/"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.item}
                    >
                      {item.name}
                    </a>
                    {item.go && <FiArrowUpRight className={styles.arrow} />}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <Pattern />
    </Section>
  );
};

export default Footer;
