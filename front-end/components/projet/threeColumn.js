import React, { useEffect } from 'react';
import Image from "next/image";
import { getStrapiMedia } from '../../lib/media';


function ThreeColumn({data}) {
  const option = "";
  useEffect(() => {
    console.log(data.column1.data.attributes);
  }, [data]);
  return (
    <div style={{ display: "flex", marginTop: "7vh", justifyContent: "space-between"  }}>
      <div style={{ paddingRight: "1.5vw" }}>
        <Image
          layout="intrinsic"
          width={973}
          height={1200}
          src={getStrapiMedia(data.column1, option)}
          alt="left"
        />
      </div>

      <div style={{ paddingLeft: "1.5vw" }}>
        <Image
          layout="intrinsic"
          width={973}
          height={1200}
          src={getStrapiMedia(data.column2, option)}
          alt="middle"
        />
      </div>

      <div style={{ paddingLeft: "1.5vw" }}>
        <Image
          layout="intrinsic"
          width={973}
          height={1200}
          src={getStrapiMedia(data.column3, option)}
          alt="right"
        />
      </div>
    </div>
  )
}

export default ThreeColumn