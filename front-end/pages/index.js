import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import Header from "../components/home/header";
import SelectedWorks from "../components/home/selected-works";
import styles from "../styles/Home.module.css";
import fetchProjects from "./api/hello";

export default function Home() {
  console.log("i am on the client non ? ");
  const data = fetchProjects();
  console.log(data);
  return (
    <>
      <Header />
      <SelectedWorks />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = fetchProjects();

  return {
    props: {},
  };
}
