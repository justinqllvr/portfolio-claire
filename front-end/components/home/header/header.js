import React from "react";
import Nav from "../../nav/nav";
import Image from "next/image";
import styles from "./header.module.css";
import scrollDown from "../../../public/assets/svg/scroll_down.svg";
import Layout from "../../utils/layout";

export default function Header() {
  return (
    <Layout>
<header className={styles.header}>
      <Nav />
      <div className={styles.align}>
        <span className={`p`}>Welcome to my portfolio</span>
        <span className={`d1`}>Claire Rieusset </span>
      </div>
      <div className={`d1 ${styles.graphic}`}>
        <span>Graphic Designer</span>
      </div>
      <div className={styles.bottom}>
        <div className={`p ${styles.parag}`}>
          I’am a french design student in Graphic design specialized in UX/UI
          design.
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
    
  );
}
