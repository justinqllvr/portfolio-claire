import React, { useEffect } from "react";
import styles from "./selectedWorks.module.css";
import Link from "next/link";
import { getStrapiMedia } from "../../../lib/media";
import Image from "next/image";

export default function SelectedWorks({ projets }) {

  useEffect(() => {
    document.getElementById("containerSelectedWorks").style.width = `${
      projets.length * 60
    }%`;
  }, [projets]);

  return (
    <div id="containerSelectedWorks" className={styles.container}>
      <h3>SelectedWorks ({projets && projets.length})</h3>
      <div className={styles.projectsContainer}>
        {projets &&
          projets.map((projet, i) => (
            <div className={styles.projet} key={i}>
              <Image
                layout="intrinsic"
                width={1500}
                height={1000}
                objectFit="contain"
                src={getStrapiMedia(projet.attributes.cover_horizontal)}
              />
              <Link href={`/projets/${projet.id}`}>
                {projet.attributes.title}
              </Link>
              {projet.attributes.date}
            </div>
          ))}
      </div>
    </div>
  );
}
