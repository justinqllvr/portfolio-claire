import React, { useEffect } from "react";
import Nav from "../../nav/nav";
import Image from "next/image";
import styles from "./header.module.css";
import scrollDown from "../../../public/assets/svg/scroll_down.svg";
import circle_header from "../../../public/assets/png/circle_header.png";
import Layout from "../../utils/layout";

export default function Header() {
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
        <Layout >
          <header className={styles.header}>
            <Nav />
            <div className={styles.align}>
              <span className={`p ${styles.welcomeText}`}>
                Welcome to my portfolio
              </span>
              <span id="name" className={`d1 ${styles.name}`}>
                Claire Rieusset{" "}
              </span>
            </div>
            <div className={`d1 ${styles.graphic}`}>
              <span>Graphic Designer</span>
            </div>
            <div className={styles.bottom}>
              <div className={`p ${styles.parag}`}>
                I’am a french design student in Graphic design specialized in
                UX/UI design. <br></br> I am passionate about everything related
                to design, web and flowers.
              </div>
              <Image
                src={scrollDown}
                width={150}
                height={150}
                layout="intrinsic"
                alt="scroll down"
              ></Image>
            </div>
          </header>
        </Layout>
      </div>
    </div>
  );
}
