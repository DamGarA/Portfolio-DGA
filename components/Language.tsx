"use client";

import { useState } from "react";
import Navigation from "./Navigation";
import Link from "next/link";
import styles from "../styles/language.module.css";

function Language() {
  const [langState, setLangState] = useState<boolean>(true);
  const handleLangState = (): void => {
    setLangState(!langState);
  };
  return (
    <div>
      <Navigation langState={langState} />
      <Link href={"/"} onClick={handleLangState} className={styles.butt}>
        <p className={styles.text}>Language/Idioma</p>
      </Link>
    </div>
  );
}

export default Language;
