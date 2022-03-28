import Image from "next/image";
import styles from "./title.module.css";
import React from "react";
import arrow from "../../public/assets/svg/arrow39px-39px.svg";

function Title({ title, size }) {
  return (
    <div>
      {size == "h1" ? (
        <div className={styles.titleContainer}>
          <Image
            src={arrow}
            width={39}
            height={39}
            layout="intrinsic"
            alt="arrow"
          ></Image>
          <h1>{title}</h1>
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
          <h2>{title}</h2>
        </div>
      )}
    </div>
  );
}

export default Title;
