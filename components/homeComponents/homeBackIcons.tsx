import {
  DiReact,
  DiPostgresql,
  DiNpm,
  DiCss3,
  DiDatabase,
  DiFirebase,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiNodejs,
  DiScrum,
  DiVisualstudio,
  DiWindows,
  DiBootstrap,
  DiChrome,
  DiCode,
  DiDropbox,
  DiFirefox,
  DiGitBranch,
  DiGitCommit,
  DiGitMerge,
} from "react-icons/di";
import styles from "../../styles/home.module.css";
import { motion } from "framer-motion";

function HomeBackIcons(): JSX.Element {
  const randomNumber = (): number => {
    const newNumber: number = Math.floor(Math.random() * 85);
    return newNumber === 0 ? 1 : newNumber;
  };

  const techArr = [
    DiReact,
    DiPostgresql,
    DiNpm,
    DiCss3,
    DiDatabase,
    DiFirebase,
    DiGit,
    DiGithubBadge,
    DiHtml5,
    DiJsBadge,
    DiNodejs,
    DiScrum,
    DiVisualstudio,
    DiWindows,
    DiBootstrap,
    DiChrome,
    DiCode,
    DiDropbox,
    DiFirefox,
    DiGitBranch,
    DiGitCommit,
    DiGitMerge,
  ];

  return (
    <>
      {techArr.map((Tec, index) => {
        const Icon = Tec;
        return (
          <motion.div
            key={index * randomNumber() * randomNumber()}
            initial={{ position: "absolute", top: 0, left: 0 }}
            animate={{
              y: `${randomNumber()}vh`,
              x: `${randomNumber()}vw`,
            }}
            transition={{ ease: "easeOut", duration: 2 }}
          >
            <Icon className={styles.icon} />
          </motion.div>
        );
      })}
    </>
  );
}

export default HomeBackIcons;
