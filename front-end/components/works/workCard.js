import Link from "next/link";
import React, { useEffect } from "react";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import styles from "./workCard.module.css";

function WorkCard({ projet, index, component }) {
  const numIsPair = (n) => {
    if (n % 2 !== 0) {
      document.querySelector(`#pair${n}`).style.marginTop = "15vh";
    }
  };

  useEffect(() => {
    if (component === "work-card") {
      numIsPair(index);
    }
  }, [index]);

  return (
    <div id={`pair${index}`} className={styles.wrapper}>
      <Link href={`/projets/${projet.id}`}>
        <Image
        className={styles.image}
          layout="intrinsic"
          width={493}
          height={630}
          objectFit="contain"
          src={getStrapiMedia(projet.attributes.cover_vertical)}
        />
      </Link>
      {projet.attributes.role.map(({role}) => <span className="label">{role.toUpperCase()} • </span>)}
      <div>
        <Link href={`/projets/${projet.id}`}><h3>{projet.attributes.title.toUpperCase()}</h3></Link>
        <span className="sous-titre">{projet.attributes.date.split("-")[0]}</span>
      </div>
      <span className="label">{projet.attributes.project_type.toUpperCase()}</span>
    </div>
  );
}

export default WorkCard;
