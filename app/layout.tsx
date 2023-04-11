// import "./globals.css";

import styles from "../styles/pagesContainer.module.css";
import { Raleway } from "@next/font/google";
import Language from "@/components/Language";

export const metadata = {
  title: "Damian Garcia Abreu",
  description: "Portfolio",
};

const raleWay = Raleway({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={styles.htmlStyles}>
      <body className={styles.pages}>
        <div className={raleWay.className}>
          <Language />
        </div>
        <div className={styles.children_container}>
          <div className={raleWay.className}>{children}</div>
        </div>
      </body>
    </html>
  );
}
