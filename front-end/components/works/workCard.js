import Link from "next/link";
import React, { useEffect } from "react";
import { getStrapiMedia } from "../../lib/media";
import Image from "next/image";
import styles from "./workCard.module.css";

function WorkCard({ projet, index, component }) {
  useEffect(() => {
    const numIsPair = (n) => {
      if (n % 2 !== 0) {
        document.querySelector(`#pair${n}`).style.marginTop = "15vh";
        document.querySelector(`#pair${n}`).style.paddingLeft = "5vw";
      } else {
        document.querySelector(`#pair${n}`).style.paddingRight = "5vw";
      }
    };

    if (component === "work-card") {
      numIsPair(index);
    }
  }, [index]);

  return (
    <div id={`pair${index}`} className={`wrapperCard ${styles.wrapper}`}>
      <Link href={`/works/${projet.id}`}>
        <a>
          <div id="imageWidth" className={styles.image}>
            <Image
              layout="intrinsic"
              width={800}
              height={1040}
              objectFit="contain"
              src={getStrapiMedia(projet.attributes.cover_vertical)}
              alt="cover_vertical"
            />
          </div>
          <div className={styles.roles}>
            {projet.attributes.role.map(({ role }, i) => (
              <span className={`label`} key={i}>
                {role?.toUpperCase()} •{" "}
              </span>
            ))}
          </div>
          <div className={styles.projet}>
            <h3>{projet.attributes.title.toUpperCase()}</h3>
            <span className="sous-titre">
              {projet.attributes.date.split("-")[0]}
            </span>
          </div>
          <span className={`label ${styles.projetType}`}>
            {projet.attributes.project_type.toUpperCase()}
          </span>
        </a>
      </Link>
    </div>
  );
}

export default WorkCard;
