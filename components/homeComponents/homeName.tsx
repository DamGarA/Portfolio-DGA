"use client";

import { motion } from "framer-motion";
import styles from "../../styles/homeName.module.css";
import { useFollowPointer } from "../../src/hooks/use-follow-pointer";
import { useRef } from "react";
import { AiOutlineAim } from "react-icons/ai";
import { renderCase, renderSubLetter } from "@/src/functions/homeNameFunctions";

function HomeName(): JSX.Element {
  const ref = useRef(null);
  let { x, y } = useFollowPointer(ref);
  if (x > 1050) x = 1050;
  if (x < 20) x = 20;
  if (y > 80) y = 80;
  return (
    <div className={styles.all_container}>
      <div className={styles.container}>
        {renderCase("D")}
        {renderSubLetter("amian", 1, true)}
        {renderCase("G")}
        {renderSubLetter("arcia", 3, true)}
        {renderCase("A")}
        {renderSubLetter("breu", 5, true)}
      </div>
      {renderSubLetter("Damian Garcia Abreu", 3, false)}

      <motion.div
        ref={ref}
        className={styles.div_movement}
        animate={{ x, y }}
        transition={{
          type: "spring",
          stiffness: 50,
          restDelta: 0.001,
        }}
      >
        <AiOutlineAim className={styles.movement} />
      </motion.div>
    </div>
  );
}

export default HomeName;
