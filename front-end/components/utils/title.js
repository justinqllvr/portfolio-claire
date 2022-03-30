import Image from "next/image";
import styles from "./title.module.css";
import React from "react";
import Arrow from "../../public/assets/svg/arrow39px39px.svg";

function Title({ title, size }) {
  return (
    <div>
      {size == "h1" ? (
        <div className={styles.titleContainer}>
          <Image
            src={Arrow}
            width={39}
            height={39}
            layout="intrinsic"
            alt="arrow"
          ></Image>
          <h1>{title.toUpperCase()}</h1>
        </div>
      ) : (
        <div className={styles.titleContainer}>
          <Image
            src={arrow}
            width={39}
            height={39}
            layout="intrinsic"
            alt="arrow"
          ></Image>
          <h2>{title.toUpperCase()}</h2>
        </div>
      )}
    </div>
  );
}

export default Title;
