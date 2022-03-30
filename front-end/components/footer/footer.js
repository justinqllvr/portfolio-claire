import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import arrow from "../../public/assets/svg/arrow24px-24px.svg";
import instagram from "../../public/assets/svg/instagram.svg";
import linkedin from "../../public/assets/svg/linkedin.svg";
import behance from "../../public/assets/svg/behance.svg";
import twitter from "../../public/assets/svg/twitter.svg";
import Layout from "../utils/layout";

export default function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <Layout>
        <div className={styles.flexContainer}>
          <div className={styles.left}>
            <div className="d3">
              Want to <br></br>discuss about <br></br> a new project ?
            </div>
            <div className={`p ${styles.parag}`}>
              Feel free to reach out if you wanna collaborate with me or simply
              have a chat
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.mail}>
              <div className="mail">CLAIRERIEUSSET.PRO@GMAIL.COM</div>
              <div className={styles.arrow}>
                <Image
                  src={arrow}
                  width={24}
                  height={24}
                  // layout="intrinsic"
                  alt="arrow"
                ></Image>
              </div>
            </div>
            <div className={`label ${styles.reseauxList}`}>
              <div className={styles.reseau}>
                <Image
                  src={instagram}
                  width={24}
                  height={24}
                  layout="intrinsic"
                  alt="arrow"
                ></Image>
                <a className={styles.reseauName}>Instagram</a>
              </div>
              <div className={styles.reseau}>
                <Image
                  src={linkedin}
                  width={24}
                  height={24}
                  layout="intrinsic"
                  alt="arrow"
                ></Image>

                <a className={styles.reseauName}>Linkedin</a>
              </div>
              <div className={styles.reseau}>
                <Image
                  src={twitter}
                  width={24}
                  height={24}
                  layout="intrinsic"
                  alt="arrow"
                ></Image>

                <a className={styles.reseauName}>Twitter</a>
              </div>
              <div className={styles.reseau}>
                <Image
                  src={behance}
                  width={24}
                  height={24}
                  layout="intrinsic"
                  alt="arrow"
                ></Image>

                <a className={styles.reseauName}>Behance</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className="label">© 2022. All rights reserved</div>
          <div className="label">DEVELOPED BY Justin Quillévéré</div>
        </div>
      </div>
    </div>
  );
}
