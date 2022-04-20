import React from "react";
import styles from "./about.module.css";
import Nav from "../components/nav/nav";
import Image from "next/image";
import arrow from "../public/assets/svg/arrow12px12px.svg";
import Title from "../components/utils/title";
import Footer from "../components/footer/footer";
import claire from "../public/assets/png/claire.png";
import Layout from "../components/utils/layout";

function about() {
  return (
    <div>
      <Layout>
        <Nav />
        <div className={styles.section}>
          <Title title={"ABOUT ME"} size="h1" />
        </div>
        <Layout>
          <div className={styles.aboutContainer}>
            <div className={styles.aboutDescription}>
              <p className="p">
                {
                  "I'm Claire Rieusset, young student from Bordeaux, passionate about webdesign and UX design."
                }
                <br></br>
                <br></br>
                {
                  "I'm currently studying for a Bachelor 3 Digital Project Manager at ESD Bordeaux. I'm passionate about the web and more particularly about interactive design. I am constantly exploring new creative techniques and new universes."
                }
                <br></br>
                {
                  "I'm listening to all new opportunities, if you have a project, an idea or a coffee, contact me !"
                }
              </p>
              <button className={`p ${styles.resume}`}>
                <a rel="noreferrer" target={"_blank"} href={"/about"}>
                  EXPLORE MY RESUME
                </a>
                <div className={styles.resumeArrow}>
                  <Image
                    src={arrow}
                    width={12}
                    height={12}
                    layout="intrinsic"
                    alt="arrow"
                  ></Image>
                </div>
              </button>
            </div>
            <div className={styles.aboutImage}>
              <Image
                src={claire}
                // width={370}
                // height={500}
                layout="intrinsic"
                alt="Claire"
              ></Image>
            </div>
          </div>
          <div className={styles.section}>
            <Title title={"WORK EXPERIENCES"} />
            <p className={`p ${styles.leftParagraphe}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              malesuada in elementum magnis in aliquam. Orci nunc odio sed
              fusce. Vulputate sem porta erat et nulla pharetra. Eu porta vitae
              ultrices ullamcorper ipsum sit donec. Lectus leo tincidunt ut
              egestas. Amet, elit proin duis morbi tincidunt.
            </p>
            <p className={`p ${styles.rightParagraphe}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              malesuada in elementum magnis in aliquam. Orci nunc odio sed
              fusce. Vulputate sem porta erat et nulla pharetra. Eu porta vitae
              ultrices ullamcorper ipsum sit donec. Lectus leo tincidunt ut
              egestas. Amet, elit proin duis morbi tincidunt.{" "}
            </p>
          </div>
          <div className={styles.section}>
            <Title title={"MY FAVORITE TOOLS"} />
          </div>
        </Layout>
      </Layout>
      <div>Barre qui défile avec les expériences</div>
      <Layout>
        <Layout>
          <div className={styles.section}>
            <Title title={"MY STUDIES"} />
            <p className={`p ${styles.leftParagraphe}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              malesuada in elementum magnis in aliquam. Orci nunc odio sed
              fusce. Vulputate sem porta erat et nulla pharetra. Eu porta vitae
              ultrices ullamcorper ipsum sit donec. Lectus leo tincidunt ut
              egestas. Amet, elit proin duis morbi tincidunt.{" "}
            </p>
            <p className={`p ${styles.rightParagraphe}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
              malesuada in elementum magnis in aliquam. Orci nunc odio sed
              fusce. Vulputate sem porta erat et nulla pharetra. Eu porta vitae
              ultrices ullamcorper ipsum sit donec. Lectus leo tincidunt ut
              egestas. Amet, elit proin duis morbi tincidunt.{" "}
            </p>
          </div>
        </Layout>
      </Layout>

      <Footer />
    </div>
  );
}

export default about;
