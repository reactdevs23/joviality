import React from "react";
import styles from "./styles.module.css";

const Pattern = () => {
  return (
    <div>
      {" "}
      {[...Array(50)].map((_, i) => (
        <img
          src="/images/verticleLine.svg"
          alt="#"
          className={styles.verticleLine}
          style={{ left: `${50 * (i + 1)}px` }}
        />
      ))}
      {[...Array(50)].map((_, i) => (
        <img
          src="/images/horizontalLine.svg"
          alt="#"
          className={styles.horizontalLine}
          style={{ top: `${50 * (i + 1)}px` }}
        />
      ))}
    </div>
  );
};

export default Pattern;
