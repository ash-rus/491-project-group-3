import Image from "next/image";
import Link from "next/link";
import styles from "./Home.module.css"; // import the CSS module

export default function Navbar() {
  return (
      <><Link href='/home'>Home</Link><Link href='/how-it-works'>How It Works</Link><Link href='/faq'>FAQ</Link></>
  );
}