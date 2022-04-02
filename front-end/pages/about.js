import React from "react";
import styles from "./about.module.css";
import Nav from "../components/nav/nav";
import Image from "next/image";
import arrow from "../public/assets/svg/arrow12px-12px.svg";
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo,
                malesuada in elementum magnis in aliquam. Orci nunc odio sed
                fusce. Vulputate sem porta erat et nulla pharetra. Eu porta
                vitae ultrices ullamcorper ipsum sit donec. Lectus leo tincidunt
                ut egestas. Amet, elit proin duis morbi tincidunt. Egestas ipsum
                consectetur pretium neque fermentum. Est etiam integer nibh
                scelerisque quis turpis enim semper scelerisque. Lobortis
                pulvinar in ut nibh tristique. Hac eget consectetur nunc, turpis
                ac viverra purus.{" "}
              </p>
              <button className={`p ${styles.resume}`}>
                <a target={"_blank"} href={"/about"}>
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
