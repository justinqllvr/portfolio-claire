import Link from "next/link";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <nav className={`p-s ${styles.nav}`}>
      <Link href="/">
        <a>Claire Rieusset</a>
      </Link>
      <div className={styles.links}>
        <Link href="/works">
          <a>WORKS</a>
        </Link>
        <Link href="/lab">
          <a>LE LAB</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </div>
    </nav>
  );
}
