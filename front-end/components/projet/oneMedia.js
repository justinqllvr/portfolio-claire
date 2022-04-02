import React, { useEffect } from "react";
import Image from "next/image";
import { getStrapiMedia } from "../../lib/media";

function OneMedia({ data }) {
    const option = "component";
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{marginTop: "7vh", textAlign: "center"}}>
      <Image
        layout="intrinsic"
        width={1900}
        height={1200}
        src={getStrapiMedia(data.cover, option)}
        alt="cover"
      />
    </div>
  );
}

export default OneMedia;
