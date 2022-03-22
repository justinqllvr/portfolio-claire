import React from 'react'
import styles from "./selectedWorks.module.css";

export default function SelectedWorks({ projects }) {
  
  return (
    <div className={styles.container}>selected-works</div>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:1337/api/projets');
  const projects = await res.json()

  return {
    props: { projects },
  };
}