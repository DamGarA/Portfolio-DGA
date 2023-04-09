"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";

interface AboutProps {
  params: {
    lang: string;
  };
}

function About({ params }: AboutProps) {
  const { lang } = params;
  const [aboutLang, setAboutLang] = useState(lang);

  return (
    <h1 className={styles.title}>
      {aboutLang === "es" ? <p>Esto es el about</p> : <p>This is the about</p>}
    </h1>
  );
}

export default About;
