import React from "react";
import Nav from "../../nav/nav";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Nav />
      <div className={styles.align}>
        <span className={`p`}>Welcome to my portfolio</span>
        <span className={`d1`}>Claire Rieusset </span>
      </div>
      <div className={`d1 ${styles.graphic}`}>
        <span>Graphic Designer</span>
      </div>
      <div className={`p ${styles.parag}`}>
        I’am a french design student in Graphic design specialized in UX/UI
        design.
      </div>
    </header>
  );
}
