import React, { useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";

function TwoColumn({ data }) {
  const option = "component";
  useEffect(() => {
    console.log(data);
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
          alt="right"
        />
      </div>
    </div>
  );
}

export default TwoColumn;
