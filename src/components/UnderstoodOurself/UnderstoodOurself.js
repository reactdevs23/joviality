import React from "react";
import { Heading, Section, Text } from "../../common.styled";
import styles from "./styles.module.css";
import "./style.css";

const UnderstoodOurself = () => {
  const data = [
    {
      title: "Physical Activities",
      text: "Physical activity refers to all movement. Popular ways to be active include walking, cycling, wheeling, sports, active recreation and play, and can be done at any level of skill and for enjoyment by everybody.",
      image: "/images/physicalActivities.svg",
    },
    {
      title: "Healthy Nutrition",
      text: "Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products. Includes a variety of protein foods such as seafood, lean meats and poultry, eggs, legumes (beans and peas), soy products, nuts, and seeds.",
      image: "/images/healthyNutrition.svg",
    },
    {
      title: "Proper Sleep",
      text: "Most adults need 7 or more hours of good-quality sleep on a regular schedule each night. Getting enough sleep isn't only about total hours of sleep. It's also important to get good-quality sleep on a regular schedule.",
      image: "/images/properSleep.svg",
    },
  ];
  return (
    <Section>
      <Heading>
        Not until we are lost do <br /> we begin to understand <br /> ourselves
      </Heading>
      <div className={styles.cardContainer}>
        {data.map((el, i) => (
          <div className={`${styles.cardWrapper}  cardContainer${i + 1}`}>
            <div className={`${styles.card} card${i + 1} card`} key={i}>
              <div>
                <h4 className={styles.title}>{el.title}</h4>
                <Text className={styles.text}>{el.text}</Text>
              </div>
              <img
                src={el.image}
                alt="#"
                className={`${styles.image} image${i + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default UnderstoodOurself;
