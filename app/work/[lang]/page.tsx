"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";

interface AboutProps {
  params: {
    lang: string;
  };
}

function Work({ params }: AboutProps): JSX.Element {
  const { lang } = params;
  const [aboutLang, setAboutLang] = useState(lang);

  return (
    <h1 className={styles.title}>
      {aboutLang === "es" ? (
        <p>Estos son los proyectos</p>
      ) : (
        <p>These are the projects</p>
      )}
    </h1>
  );
}

export default Work;
