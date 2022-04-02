import React, { useEffect } from "react";

function Paragraphe({ data }) {
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div style={{marginTop: "7vh", width: "100%", display: "flex", justifyContent: "center"}}>
      <p style={{width: "70%"}} className="p-l">{data.paragraphe}</p>
    </div>
  );
}

export default Paragraphe;
