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
      <div className={styles.layout}>
        <h3 className={styles.title}>
          SelectedWorks ({projets && projets.length})
        </h3>
        <div className={styles.projectsContainer}>
          {projets &&
            projets.map((projet, i) => (
              <div className={styles.projet} key={i}>
                <Image
                  layout="intrinsic"
                  width={836}
                  height={500}
                  src={getStrapiMedia(projet.attributes.cover_horizontal)}
                />
                <Link href={`/projets/${projet.id}`}>
                  <a className={`sous-titre ${styles.projetName}`}>
                    {projet.attributes.title}
                  </a>
                </Link>
                <span className="p-s" style={{lineHeight: "5px"}}>
                  {projet.attributes.date &&
                    projet.attributes.date.split("-")[0]}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
