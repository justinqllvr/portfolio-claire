import React, { useEffect } from "react";
import Nav from "../../nav/nav";
import Image from "next/image";
import styles from "./header.module.css";
import scrollDownArrow from "../../../public/assets/svg/arrow_from_scoll_down.svg";
import scrollDownText from "../../../public/assets/svg/scrollDownText.svg";
import circle_header from "../../../public/assets/png/circle_header.png";
import Layout from "../../utils/layout";

export default function Header() {
  useEffect(() => {
    const animationText = () => {
      document
        .getElementById("animation1")
        .classList.add(`${styles.animation1}`);

      setTimeout(() => {
        document
          .getElementById("animation2")
          .classList.add(`${styles.animation2}`);
      }, 250);

      setTimeout(() => {
        document
          .getElementById("animation3")
          .classList.add(`${styles.animation3}`);
      }, 500);
    };
    animationText();
  }, []);

  return (
    <div>
      <div className={styles.backgroundCircle}>
        <Image
          src={circle_header}
          width={1200}
          height={1280}
          layout="intrinsic"
          alt="scroll down"
        ></Image>
      </div>
      <div className={styles.zindex}>
        <Layout>
          <header className={styles.header}>
            <Nav />
            <div className={styles.align}>
              <span id="animation1" className={`p ${styles.welcomeText}`}>
                Welcome to my portfolio
              </span>
              <span id="animation2" className={`d1 ${styles.name}`}>
                Claire Rieusset
              </span>
            </div>
            <div id="graphic" className={`d1 ${styles.graphic}`}>
              <span id="animation3" className={styles.designer}>
                Graphic Designer
              </span>
            </div>
            <div className={styles.bottom}>
              <div className={`p ${styles.parag}`}>
                I’am a french design student in Graphic design specialized in
                UX/UI design. <br></br> I am passionate about everything related
                to design, web and flowers.
              </div>
              <div>
                <div className={styles.rotate}>
                  <Image
                    src={scrollDownText}
                    width={150}
                    height={150}
                    layout="intrinsic"
                    alt="scroll down"
                  ></Image>
                </div>
                <div className={styles.arrow}>
                <Image
                src={scrollDownArrow}
                width={50}
                height={50}
                layout="intrinsic"
                alt="arrow scroll down"
              ></Image>
                </div>
              
              </div>

              
            </div>
          </header>
        </Layout>
      </div>
    </div>
  );
}
