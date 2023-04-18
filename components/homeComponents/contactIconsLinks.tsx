import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import styles from "../../styles/contactIconLinks.module.css";

function ContactIconLinks(): JSX.Element {
  return (
    <div className={styles.container}>
      <Link href="https://github.com/DamGarA">
        <BsGithub className={styles.icon} />
      </Link>
      <Link href="https://www.linkedin.com/in/dami%C3%A1n-garc%C3%ADa-abreu-381236255/">
        <BsLinkedin className={styles.icon} />
      </Link>
    </div>
  );
}

export default ContactIconLinks;
