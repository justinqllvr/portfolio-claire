import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import arrow from "../../public/assets/svg/arrow24px24px.svg";
import instagram from "../../public/assets/svg/instagram.svg";
import linkedin from "../../public/assets/svg/linkedin.svg";
import behance from "../../public/assets/svg/behance.svg";
import twitter from "../../public/assets/svg/twitter.svg";
import circle_footer from "../../public/assets/png/circle_contact.png";
import Layout from "../utils/layout";

export default function Footer() {
  return (
    <div id="footer" className={styles.container}>
      <div className={styles.zindex}>
        <Layout>
          <div className={styles.flexContainer}>
            <div className={styles.left}>
              <div className="d3">
                Want to <br></br>discuss about <br></br> a new project ?
              </div>
              <div className={`p ${styles.parag}`}>
                Feel free to reach out if you wanna collaborate with me or
                simply have a chat
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.mail}>
                <a href="mailto:clairerieusset.pro@gmail.com" className="mail">
                  CLAIRERIEUSSET.PRO@GMAIL.COM
                </a>
                <div className={styles.arrow}>
                  <Image
                    src={arrow}
                    width={28}
                    height={28}
                    // layout="intrinsic"
                    alt="arrow"
                  ></Image>
                </div>
              </div>
              <div className={`label ${styles.reseauxList}`}>
                <div className={styles.reseau}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/clairieusset.design/"
                  >
                    <Image
                      src={instagram}
                      width={40}
                      height={40}
                      layout="intrinsic"
                      alt="arrow"
                    ></Image>
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/clairieusset.design/"
                    className={styles.reseauName}
                  >
                    Instagram
                  </a>
                </div>
                <div className={styles.reseau}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/claire-rieusset-882633182/?originalSubdomain=fr"
                  >
                    <Image
                      src={linkedin}
                      width={40}
                      height={40}
                      layout="intrinsic"
                      alt="arrow"
                    ></Image>
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/claire-rieusset-882633182/?originalSubdomain=fr"
                    className={styles.reseauName}
                  >
                    Linkedin
                  </a>
                </div>
                <div className={styles.reseau}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/clairieusset"
                  >
                    <Image
                      src={twitter}
                      width={40}
                      height={40}
                      layout="intrinsic"
                      alt="arrow"
                    ></Image>
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com/clairieusset"
                    className={styles.reseauName}
                  >
                    Twitter
                  </a>
                </div>
                <div className={styles.reseau}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.behance.net/clairerieusset1"
                  >
                    <Image
                      src={behance}
                      width={40}
                      height={40}
                      layout="intrinsic"
                      alt="arrow"
                    ></Image>
                  </a>

                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.behance.net/clairerieusset1"
                    className={styles.reseauName}
                  >
                    Behance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>

      <div className={styles.footerContainer}>
        <div className={styles.footer}>
          <div className="label">© 2022. All rights reserved</div>
          <div className="label">DEVELOPED BY Justin Quillévéré</div>
        </div>
      </div>

      <div className={styles.bottomCircle}>
        <Image
          src={circle_footer}
          width={1200}
          height={1200}
          layout="intrinsic"
          alt="arrow"
        ></Image>
      </div>
    </div>
  );
}
