import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer/footer";
import Header from "../components/home/header/header";
import SelectedWorks from "../components/home/selectedWorks/selectedWorks";
import styles from "../styles/Home.module.css";
import fetchProjects from "./api/hello";

export default function Home({projects}) {
  
  projects && console.log(projects)

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

