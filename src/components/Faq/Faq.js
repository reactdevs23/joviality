import React from "react";
import { Section, Heading } from "../../common.styled";
import SingleFaq from "./SingleFaq/SingleFaq";
import styles from "./styles.module.css";

const Faq = () => {
  const data = [
    {
      question: "What is AI Mental Health Assistant ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
    {
      question: "Is AI Mental Health Free ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
    {
      question: "Is AI Mental Health Safe & Trusted ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
    {
      question: "How AI can be used in Mental Health ?",
      answer:
        "It is an AI-based chat solution, that takes insights from Cognitive Behavioral Therapy (CBT) to offer mental health consultation. It is designed in such a way that you may feel talking to a real human being.. It is always responsive and makes effective interactions that make end users relieved and happier.",
    },
  ];
  return (
    <div className={styles.faq}>
      <Section>
        <div className={styles.faqContainer}>
          <Heading>
            FREQUENTLY ASKED <br /> QUESTIONS
          </Heading>
          <div className={styles.faqs}>
            {data.map((el, i) => (
              <SingleFaq {...el} i={i} key={i} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Faq;
