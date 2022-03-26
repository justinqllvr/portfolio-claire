import React from "react";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import Title from "../components/title/title";
import WorkCard from "../components/works/workCard";
import { fetchAPI } from "../lib/api";

function works({ projets }) {
  return (
    <div>
      <Nav />
      <Title title={"ALL MY WORKS"} size="h1" />
      <div style={{display: "flex", flexWrap: "wrap"}}>
        {projets.map((projet, i) => (
          <WorkCard projet={projet} index={i} key={i} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const projetsRes = await fetchAPI("/projets", { populate: "*" });

  return {
    props: {
      projets: projetsRes.data,
    },
    revalidate: 1,
  };
}

export default works;
