import React, { useEffect } from "react";
import Footer from "../../components/footer/footer";
import Nav from "../../components/nav/nav";
import Layout from "../../components/utils/layout";
import Title from "../../components/utils/title";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";

import { fetchAPI } from "../../lib/api";

const Projets = ({ projet }) => {
  useEffect(() => {
    console.log(projet);
  }, [projet]);

  return (
    <div>
      <Layout>
        <Nav />
        <button>Return to all my works</button>
        <Title title={projet.title} size="h1" />
        <span>{projet.date.split("-")[0]}</span>

        <div>
          <div>
            {projet.client && (
              <div>
                <span>CLIENT</span>
                <span>{projet.client}</span>
              </div>
            )}

            {projet.role && (
              <div>
                <span>ROLES</span>
                <div>
                  {projet.role.map(({ role }) => (
                    <span>{role}</span>
                  ))}
                </div>
              </div>
            )}

            {projet.technos && (
              <div>
                <span>TECHNOLOGIES</span>
                <div>
                  {projet.technos.map(({ technos }) => (
                    <span>{technos}</span>
                  ))}
                </div>
              </div>
            )}

            {projet.credits && (
              <div>
                <span>TECHNOLOGIES</span>
                <div>
                  {projet.credits.map(({ credits }) => (
                    <a href={credits_lien}>{credits}</a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Image
            layout="intrinsic"
            width={1000}
            height={630}
            src={getStrapiMedia(projet.cover_horizontal)}
          />
        </div>
        <div>
          <h3>/ DESCRIPTION</h3>
          <p>{projet.description}</p>
          <button>Experience the online version</button>
        </div>
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
    populate: "*",
  });

  return {
    props: { projet: projetsRes.data[0].attributes },
    revalidate: 1,
  };
}

export default Projets;
