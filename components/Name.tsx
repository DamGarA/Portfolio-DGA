import Link from "next/link";
import styles from "../styles/name.module.css";

interface NameProps {
  handleNav: () => void;
}

export default function Name(props: NameProps) {
  const { handleNav } = props;
  return (
    <Link href={"/"} className={styles.nameLink}>
      <div onClick={handleNav} className={styles.container}>
        <p className={styles.dga}>DGA</p>
        <p className={styles.dga_back}>DGA</p>
        <p className={styles.fsd}>Full Stack Developer</p>
      </div>
    </Link>
  );
}
