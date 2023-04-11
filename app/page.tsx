"use client";

import HomeName from "@/components/homeComponents/homeName";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";

function Home(): JSX.Element | boolean {
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => setRender(true), []);
  return (
    render && (
      <div className={styles.container}>
        <HomeName />
        <p className={styles.fld_text}>Full Stack Developer</p>
      </div>
    )
  );
}

export default Home;
