import React from "react";
import Footer from "../components/footer/footer";
import Nav from "../components/nav/nav";
import Layout from "../components/utils/layout";
import Title from "../components/utils/title";
import WorkCard from "../components/works/workCard";
import { fetchAPI } from "../lib/api";

function works({ projets }) {
  return (
    <div>
      <Layout>
        <Nav />
        <div style={{marginTop: "7vh"}}>
          <Title title={"ALL MY WORKS"} size="h1" />
        </div>

        <Layout>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginTop: "7vh",
            }}
          >
            {projets.map((projet, i) => (
              <WorkCard
                projet={projet}
                index={i}
                key={i}
                component={"work-card"}
              />
            ))}
          </div>
        </Layout>
      </Layout>

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
