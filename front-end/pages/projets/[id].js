import React, { useEffect } from "react";
import { fetchAPI } from "../../lib/api";

const Projets = ( {projet} ) => {

useEffect(() => {
  console.log(projet.attributes)


}, [projet])

  return <div>{projet.title}</div>;
};

export async function getStaticPaths() {
  const projetsRes = await fetchAPI("/projets");
  // projetsRes.data.map(projet => console.log(String(projet.id)))

  const paths = projetsRes.data.map((projet) => ({
    params: {id: String(projet.id)}
  }))

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
