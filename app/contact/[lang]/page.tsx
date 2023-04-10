"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";

interface AboutProps {
  params: {
    lang: string;
  };
}

function Contact({ params }: AboutProps): JSX.Element {
  const { lang } = params;
  const [aboutLang, setAboutLang] = useState(lang);

  return (
    <h1 className={styles.title}>
      {aboutLang === "es" ? (
        <p>Este es el contacto</p>
      ) : (
        <p>This is the contact</p>
      )}
    </h1>
  );
}

export default Contact;
