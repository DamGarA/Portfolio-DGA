"use client";

import HomeName from "@/components/homeComponents/homeName";
import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import HomeBackIcons from "@/components/homeComponents/homeBackIcons";
import ContactIconLinks from "@/components/homeComponents/contactIconsLinks";

function Home(): JSX.Element | boolean {
  const [render, setRender] = useState<boolean>(false);
  useEffect(() => setRender(true), []);
  return (
    render && (
      <div className={styles.container}>
        <HomeName />
        <p className={styles.fld_text}>Full Stack Developer</p>
        <ContactIconLinks />
        <HomeBackIcons />
      </div>
    )
  );
}

export default Home;
