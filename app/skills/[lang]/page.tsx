"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";

interface AboutProps {
  params: {
    lang: string;
  };
}

function Skills({ params }: AboutProps) {
  const { lang } = params;
  const [aboutLang, setAboutLang] = useState(lang);

  return (
    <h1 className={styles.title}>
      {aboutLang === "es" ? (
        <p>Estas son las habilidades</p>
      ) : (
        <p>These are the skills</p>
      )}
    </h1>
  );
}

export default Skills;
