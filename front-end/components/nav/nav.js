import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import circle_footer from "../../public/assets/png/circle_nav.png";

export default function Nav() {
  return (
    <nav className={`p-s ${styles.nav}`}>
      <Link href="/">
        <a className={styles.name}>
          <div>
            <Image
              src={circle_footer}
              width={15.67}
              height={15.67}
              layout="intrinsic"
              alt="arrow"
            ></Image>
          </div>
          <span>Claire Rieusset</span>
        </a>
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
