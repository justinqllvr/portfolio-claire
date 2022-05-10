import Link from "next/link";
import Image from "next/image";
import styles from "./nav.module.css";
import circle_footer from "../../public/assets/png/circle_nav.png";
import { useEffect } from "react";

export default function Nav() {
  useEffect(() => {

      /////////// EFFET NAV ////////////
      const arrayDivName = ["works","lelab","about"]
      for (let k = 0; k < arrayDivName.length; k++) {
        for (let i = 10*k; i < 5+10*k; i++) {
          document.getElementById(
            `index${i + 1}`
          ).style.transitionDelay = `calc(.05s * ${i - k*10})`;
        }

        for (let a = 6+10*k; a < 11+k*10; a++) {
          document.getElementById(
            `index${a}`
          ).style.transitionDelay = `calc(.05s * ${a - (6+10*k)})`;
        }

        document
      .getElementById(`menu-nav-${arrayDivName[k]}`)
      .addEventListener("mouseover", () => {
        for (let i = k*10; i < arrayDivName[k].length+k*10; i++) {
          document.getElementById(`index${i + 1}`).style.transform =
            "translateY(-75%) rotateX(-90deg)";
        }
        for (let j = 6+k*10; j < 11+k*10; j++) {
          document.getElementById(`index${j}`).style.transform =
            "translateY(0) rotateX(0)";
        }
      });

      document
      .getElementById(`menu-nav-${arrayDivName[k]}`)
      .addEventListener("mouseleave", () => {
        for (let i = k*10; i < 5+k*10; i++) {
          document.getElementById(`index${i + 1}`).style.transform =
            "translateY(0) rotateX(0)";
        }
        for (let j = 6+k*10; j < 11+k*10; j++) {
          document.getElementById(`index${j}`).style.transform =
            "translateY(75%) rotateX(-90deg)";
        }
      });
      }

      
  }, []);

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
          <a>
            <div id="menu-nav-works" className={styles.menuItem}>
              <div>
                <span id="index1" className={styles.works}>
                  W
                </span>
                <span id="index2" className={styles.works}>
                  O
                </span>
                <span id="index3" className={styles.works}>
                  R
                </span>
                <span id="index4" className={styles.works}>
                  K
                </span>
                <span id="index5" className={styles.works}>
                  S
                </span>
              </div>
              <div className={styles.hover_clone}>
                <span id="index6" className={styles.works_clone}>
                  W
                </span>
                <span id="index7" className={styles.works_clone}>
                  O
                </span>
                <span id="index8" className={styles.works_clone}>
                  R
                </span>
                <span id="index9" className={styles.works_clone}>
                  K
                </span>
                <span id="index10" className={styles.works_clone}>
                  S
                </span>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/lab">
          <a>
            <div id="menu-nav-lelab">
              <div>
                <span id="index11" className={styles.works}>
                  L
                </span>
                <span id="index12" className={styles.works}>
                  E &nbsp;
                </span>
                <span id="index13" className={styles.works}>
                  L
                </span>
                <span id="index14" className={styles.works}>
                  A
                </span>
                <span id="index15" className={styles.works}>
                  B
                </span>
              </div>
              <div className={styles.hover_clone}>
                <span id="index16" className={styles.works_clone}>
                  L
                </span>
                <span id="index17" className={styles.works_clone}>
                  E &nbsp;
                </span>
                <span id="index18" className={styles.works_clone}>
                  L
                </span>
                <span id="index19" className={styles.works_clone}>
                  A
                </span>
                <span id="index20" className={styles.works_clone}>
                  B
                </span>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/about">
          <a>
            <div id="menu-nav-about">
              <div>
                <span id="index21" className={styles.works}>
                  A
                </span>
                <span id="index22" className={styles.works}>
                  B
                </span>
                <span id="index23" className={styles.works}>
                  O
                </span>
                <span id="index24" className={styles.works}>
                  U
                </span>
                <span id="index25" className={styles.works}>
                  T
                </span>
              </div>
              <div className={styles.hover_clone}>
                <span id="index26" className={styles.works_clone}>
                  A
                </span>
                <span id="index27" className={styles.works_clone}>
                  B
                </span>
                <span id="index28" className={styles.works_clone}>
                  O
                </span>
                <span id="index29" className={styles.works_clone}>
                  U
                </span>
                <span id="index30" className={styles.works_clone}>
                  T
                </span>
              </div>
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </div>
    </nav>
  );
}
