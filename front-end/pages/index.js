import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/home/header/header";
import SelectedWorks from "../components/home/selectedWorks/selectedWorks";
import styles from "../styles/Home.module.css";
import fetchProjects from "./api/hello";

export default function Home({projects}) {
  
  useEffect(() => {
    console.log(projects)
  
  }, [projects])
  
  return (
    <>
      <Header />
      <SelectedWorks />
      <Footer />
      <div>
        {projects && projects.data.map(project => (
          <div>{project.attributes.name}</div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/api/projets", {
    method: 'GET',
    headers: {
      // Authorization: `Bearer ${API_TOKEN}`,
      'Content-Type': 'application/json',
    }});
  console.log("first")
  console.log(res)
  const projects = await res.json();

  return {
    props: { projects: projects },
  };
}