import React from "react";
import CountUp from "react-countup";
import { HiOutlinePlus } from "react-icons/hi";
import styles from "./CountUp.module.css";

const CountUps = () => {
  const data = [
    { prefix: "", amount: 3800, text: "USER ACTIVE" },
    { prefix: "", amount: 230, text: "TRUSTED BY COMPANY" },
  ];
  return (
    <div className={styles.countUp}>
      <div className={styles.firstTwo}>
        {data.map((el, i) => (
          <div className={`${styles.number} ${styles.border}`} key={i}>
            <CountUp
              duration={1}
              suffix=""
              prefix={el.prefix}
              className={styles.count}
              end={el.amount}
            />
            {el.prefix && <span className={styles.count}>M</span>}
            <HiOutlinePlus className={styles.plus} />
            <p className={styles.text}>{el.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.number}>
        <CountUp
          duration={1}
          suffix=""
          prefix={"$"}
          className={styles.count}
          end={230}
        />
        <span className={styles.count}>M</span>
        <HiOutlinePlus className={styles.plus} />
        <p className={styles.text}>TRANSACTION</p>
      </div>
    </div>
  );
};

export default CountUps;
