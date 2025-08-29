import Image from "next/image";
import Navbar from "../component/Navbar";
import styles from "../style/Home.module.css"; // import the CSS module

export default function Home() {
  return (
     <div id={styles["main-page"]}>
      <h1 id={styles["welcome"]}>Welcome to Quizzy</h1>
      <Navbar />
    </div>
  );
}
