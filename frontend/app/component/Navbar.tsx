import Image from "next/image";
import Link from "next/link";
import styles from "../style/Navbar.module.css"; // import the CSS module

export default function Navbar() {
  return (
      <div className={styles.navbar} >
      <Link href="/home" className={styles.navLink}>Home</Link>
      <Link href="/how-it-works" className={styles.navLink}>How It Works</Link>
      <Link href="/faq" className={styles.navLink}>FAQ</Link>
      </div>
  );
} 