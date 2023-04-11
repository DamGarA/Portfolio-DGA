"use client";

import { motion } from "framer-motion";
import styles from "../../styles/homeName.module.css";

function renderCase(letter: string): JSX.Element {
  return (
    <motion.div
      animate={{
        y: "2vh",
      }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <p className={styles.uppeCaseLetter}>{letter}</p>
    </motion.div>
  );
}

function HomeName(): JSX.Element {
  return (
    <div>
      <div className={styles.container}>
        {renderCase("D")}
        <p className={styles.sub_letters}>amian</p>
        {renderCase("G")}
        <p className={styles.sub_letters}>arcia</p>
        {renderCase("A")}
        <p className={styles.sub_letters}>breu</p>
      </div>
      <p className={styles.sub_p}>Damian Garcia Abreu</p>
    </div>
  );
}

export default HomeName;
