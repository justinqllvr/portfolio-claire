import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.left}>
          <h1>Want to discuss about a new project ?</h1>
          <p className={`p ${styles.parag}`}>
            Feel free to reach out if you wanna collaborate with me or simply
            have a chat
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.mail}>
            <div className="mail">CLAIRERIEUSSET.PRO@GMAIL.COM</div>
            <img></img>
          </div>
          <div className={`label ${styles.reseaux}`}>
            <div>
              <img></img>
              <a>Instagram</a>
            </div>
            <div>
              <img></img>
              <a>Linkedin</a>
            </div>
            <div>
              <img></img>
              <a>Twitter</a>
            </div>
            <div>
              <img></img>
              <a>Behance</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className="label">© 2022. All rights reserved</div>
          <div className="label">DEVELOPED BY Justin Quillévéré</div>
        </div>
      </div>
    </div>
  );
}
