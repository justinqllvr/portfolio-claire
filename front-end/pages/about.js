import React from "react";
import styles from "./about.module.css";
import Nav from "../components/nav/nav";
import Image from "next/image";
import arrow from "../public/assets/svg/arrow12px12px.svg";
import Title from "../components/utils/title";
import Footer from "../components/footer/footer";
import claire from "../public/assets/png/claire.png";
import { fetchAPI } from "../lib/api";
import Layout from "../components/utils/layout";

function about({ competences }) {
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
              {/* <button className={`p ${styles.resume}`}>
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
              </button> */}
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
              September 2021 rhymes with the beginning of my UX/UI design
              internship at Mink. This experience allows me to play all day long
              with the colors, the typographies and the interface of the
              companies that trust my web agency. I think about the path that a
              user will take when he visits our site, what is the typical
              user...
            </p>
            <p className={`p ${styles.rightParagraphe}`}>
              In parallel to my work-study at the web agency, I realize
              freelance projects such as the creation of logos or posters for
              individuals. Before this experience, I did two 3-month internships
              as a visual content creator and web editor.
            </p>
          </div>
          {/* <div className={styles.section}>
            <Title title={"MY FAVORITE TOOLS"} />
          </div> */}
        </Layout>
      </Layout>
      {/* <div className={`competence-line ${styles.competences}`}>
        {competences &&
          competences[0].attributes.competences.map((competence) => (
            <div key={competence.id}>{competence.competence} • </div>
          ))}
      </div> */}
      <Layout>
        <Layout>
          <div className={styles.section}>
            <Title title={"MY STUDIES"} />
            <p className={`p ${styles.leftParagraphe}`}>
              After a semester in a preparatory class of economics (ENS
              Paris-Saclay D2), I chose to reorient myself in my passions:
              digital and design. <br></br>
              {
                "That's how I ended up in a HAD in Multimedia and Internet in Bordeaux."
              }
              <br></br>
              {
                "That's where I learned to become a real Swiss knife in the digital world."
              }
            </p>
            <p className={`p ${styles.rightParagraphe}`}>
              {
                " Thanks to this training, I discovered photography, video, web development and my favorite field: interface design. With my HAD in my pocket, I joined ESD Bordeaux in a Bachelor's degree in digital project management with a digital creation option. And now you know everything about Claire Rieusset."
              }
            </p>
          </div>
        </Layout>
      </Layout>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const res = await fetchAPI("/competences", { populate: "*" });

  return {
    props: {
      competences: res.data,
    },
    revalidate: 1,
  };
}

export default about;
