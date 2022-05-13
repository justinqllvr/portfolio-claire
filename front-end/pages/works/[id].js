import React, { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import Layout from "../../components/utils/layout";
import Title from "../../components/utils/title";
import styles from "./[id].module.css";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

import { fetchAPI } from "../../lib/api";
import OneMedia from "../../components/projet/oneMedia";
import TwoColumn from "../../components/projet/twoColumn";
import ThreeColumn from "../../components/projet/threeColumn";
import arrow from "../../public/assets/svg/arrow12px12px.svg";
import Paragraphe from "../../components/projet/paragraphe";

const Works = ({ projet }) => {
  const [descriptionArray, setDescriptionArray] = useState([]);

  useEffect(() => {
    document.getElementById("rubriqueContainer").style.height = `${document.getElementById("coverImage").clientHeight}px`
    console.log(projet);

    const str = projet.description;
    //fonction afin découper la description en 3 parties
    const getDescription = (str) => {
      const descriptionArray = [];
      for (let i = 0; i < 3; i++) {
        descriptionArray.push(
          str.substring((str.length / 3) * i, (str.length / 3) * (i + 1))
        );
      }
      console.log(descriptionArray);
      return descriptionArray;
    };

    setDescriptionArray(getDescription(projet.description));
  }, [projet]);

  return (
    <div>
      <Layout>
        <Nav />
        <div className={styles.title}>
          <Title title={projet.title} size="h1" />
          <h3 className={styles.date}>{projet.date.split("-")[0]}</h3>
        </div>
        <div className={styles.top}>
          <div id="rubriqueContainer" className={styles.rubriqueContainer}>
            {projet.client && (
              <div className={styles.innerRubrique}>
                <h3>CLIENT</h3>
                <span className="rubrique">{projet.client}</span>
              </div>
            )}
            {projet.role && (
              <div className={styles.innerRubrique}>
                <h3>ROLES</h3>
                <div className={styles.rubriqueList}>
                  {projet.role.map(({ role }, i) => (
                    <span key={i} className="rubrique">{role}</span>
                  ))}
                </div>
              </div>
            )}
            {projet.technos && (
              <div className={styles.innerRubrique}>
                <h3>TECHNOLOGIES</h3>
                <div className={styles.rubriqueList}>
                  {projet.technos.map(({ technos },i) => (
                    <span key={i} className="rubrique">{technos}</span>
                  ))}
                </div>
              </div>
            )}
            {projet.credits && (
              <div className={styles.innerRubrique}>
                <h3>TECHNOLOGIES</h3>
                <div className={styles.rubriqueList}>
                  {projet.credits.map(({ credits },i) => (
                    <a key={i} className="rubrique" href={credits_lien}>
                      {credits}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div id='coverImage'>
            <Image
              layout="intrinsic"
              width={1000}
              height={630}
              src={getStrapiMedia(projet.cover_horizontal)}
              alt="cover horizontal"
            />
          </div>
        </div>
        <div className={styles.description}>
          <h3>/ DESCRIPTION</h3>
          <div className={styles.subDescriptionContainer}>
            {descriptionArray.length > 0 &&
              descriptionArray.map((desc, i) => (
                <p key={i} style={{ width: "30%" }} className="p-s">
                  {desc}
                </p>
              ))}
          </div>

          <button className={`p ${styles.onlineLink}`}>
            <a rel="noreferrer" target={"_blank"} href={projet?.link}>
              EXPERIENCE THE ONLINE VERSION
            </a>
            <div className={styles.onlineLinkArrow}>
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
        {projet.galerie?.map((component, i) => {
          switch (component.__component.split(".")[1]) {
            case "one-media":
              return <OneMedia key={i} data={component} />;
            case "two-column":
              return <TwoColumn key={i} data={component} />;
            case "three-column":
              return <ThreeColumn key={i} data={component} />;
            case "paragraphe":
              return <Paragraphe key={i} data={component} />;
            default:
              console.log(`:()`);
          }
        })}
      </Layout>
      <Footer />
    </div>
  );
};

export async function getStaticPaths() {
  const projetsRes = await fetchAPI("/projets");
  // projetsRes.data.map(projet => console.log(String(projet.id)))

  const paths = projetsRes.data.map((projet) => ({
    params: { id: String(projet.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const projetsRes = await fetchAPI("/projets", {
    filters: {
      id: params.id,
    },
    populate: {
      galerie: {
        populate: "*",
      },
      cover_horizontal: "*",
      role: "*",
      technos: "*",
      credits: "*",
    },
  });

  return {
    props: { projet: projetsRes.data[0].attributes },
    revalidate: 1,
  };
}

export default Works;
