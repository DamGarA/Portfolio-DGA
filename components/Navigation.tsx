"use client";

import Link from "next/link";
import styles from "../styles/navigation.module.css";
import Name from "./Name";
import { useState } from "react";
import linksEn from "../public/locales/en/links";
import linksEs from "../public/locales/es/links";

interface NavProps {
  langState: boolean;
}

function Navigation({ langState }: NavProps): JSX.Element {
  const [activeNav, setActiveNav] = useState<boolean>(false);
  let typeLinks;
  let lang = "en";

  if (langState) {
    typeLinks = linksEn;
    lang = "en";
  } else {
    typeLinks = linksEs;
    lang = "es";
  }

  const handleNav = (): void => {
    setActiveNav(!activeNav);
  };

  return (
    <div className={activeNav ? styles.container : styles.container_close}>
      <div
        onClick={handleNav}
        className={activeNav ? styles.nav_menuBar_close : styles.nav_menuBar}
      >
        <div className={styles.line}></div>
        <div></div>
        <div></div>
      </div>
      <Name handleNav={handleNav} />
      {typeLinks.map((link) => {
        return (
          <Link
            key={link.route}
            href={`${link.route}/${lang}`}
            className={styles.linkStyle}
            onClick={handleNav}
          >
            <p>{link.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Navigation;
