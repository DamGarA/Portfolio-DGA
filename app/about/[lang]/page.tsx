"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";
import aboutEn from "@/public/locales/en/about";
import aboutEs from "@/public/locales/es/about";

interface AboutProps {
  params: {
    lang: string;
  };
}

function About({ params }: AboutProps): JSX.Element {
  const { lang } = params;
  const [aboutLang, setAboutLang] = useState(lang);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {aboutLang === "es" ? (
          <p>{aboutEs.aboutTitle}</p>
        ) : (
          <p>{aboutEn.aboutTitle}</p>
        )}
      </h1>
      <h3 className={styles.text}>
        {aboutLang === "es" ? (
          <p>{aboutEs.aboutText}</p>
        ) : (
          <p>{aboutEn.aboutText}</p>
        )}
      </h3>
    </div>
  );
}

export default About;
