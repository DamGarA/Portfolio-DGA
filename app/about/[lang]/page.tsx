"use client";

import { useState } from "react";
import styles from "../../../styles/about.module.css";
import aboutEn from "@/public/locales/en/about";
import aboutEs from "@/public/locales/es/about";
import { Accordion } from "@chakra-ui/react";
import renderAcordion from "@/src/functions/aboutFunctions";

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
      <div className={styles.acordion}>
        <Accordion>
          {renderAcordion("aboutWho", "aboutWhoText", aboutLang)}
          {renderAcordion("aboutUbication", "aboutUbicationText", aboutLang)}
          {renderAcordion("aboutStudy", "aboutStudyText", aboutLang)}
          {renderAcordion("aboutHobbies", "aboutHobbiesText", aboutLang)}
          {renderAcordion("aboutEnglish", "aboutEnglishText", aboutLang)}
        </Accordion>
      </div>
    </div>
  );
}

export default About;
