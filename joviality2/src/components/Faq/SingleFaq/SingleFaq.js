import React, { useState } from "react";
import { Text } from "../../../common.styled";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import styles from "./style.module.css";

const SingleFaq = ({ question, answer, i }) => {
  const [showAnswer, setShowAnswer] = useState();
  return (
    <div>
      <div
        className={`${styles.questionContainer} ${
          i === 0 && styles.questionRadius
        }`}
        onClick={() => setShowAnswer((prev) => !prev)}
      >
        <p className={styles.question}>{question}</p>
        {!showAnswer ? (
          <MdOutlineKeyboardArrowDown className={styles.arrow} />
        ) : (
          <MdOutlineKeyboardArrowUp className={styles.arrow} />
        )}
      </div>
      {showAnswer && (
        <Text className={styles.answer}>
          <span className={styles.ans}>{answer}</span>
        </Text>
      )}
    </div>
  );
};

export default SingleFaq;
