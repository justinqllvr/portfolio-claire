import Link from "next/link";
import React, { useEffect } from "react";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import styles from "./workCard.module.css";

function WorkCard({ projet, index }) {
  const numIsPair = (n) => {
      console.log(n)
      if((n % 2) !== 0) {
        document.querySelector(`#pair${n}`).style.marginTop = "50px"
      }
  }


  useEffect(() => {
    numIsPair(index)
  
    
  }, [index])
  
  return (
    <div id={`pair${index}`} className={styles.wrapper}>
      <Link href={`/projets/${projet.id}`} >
        <Image
          layout="intrinsic"
          width={300}
          height={500}
          objectFit="contain"
          src={getStrapiMedia(projet.attributes.cover_vertical)}
        />
      </Link>

      <span>List des fonctions</span>
      <div>
        <h3>{projet.attributes.title}</h3>
        <span>{projet.attributes.date}</span>
      </div>
      <span>{projet.attributes.project_type}</span>
    </div>
  );
}

export default WorkCard;
