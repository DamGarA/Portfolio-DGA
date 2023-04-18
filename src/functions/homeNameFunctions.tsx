import { motion } from "framer-motion";
import { Italianno } from "@next/font/google";
import styles from "../../styles/homeName.module.css";

const italianno = Italianno({
  subsets: ["latin"],
  weight: "400",
});

function renderCase(letter: string): JSX.Element {
  return (
    <motion.div
      animate={{
        y: "30%",
        x: "1vw",
        zIndex: 0,
      }}
      transition={{ ease: "easeOut", duration: 2 }}
    >
      <div className={italianno.className}>
        <p className={styles.uppeCaseLetter}>{letter}</p>
      </div>
    </motion.div>
  );
}

function renderSubLetter(text: string, dur: number, css: boolean): JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1, zIndex: 1 }}
      transition={{ duration: dur }}
    >
      <p className={css ? styles.sub_letters : styles.sub_p}>{text}</p>
    </motion.div>
  );
}

export { renderCase, renderSubLetter };
