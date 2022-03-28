import React from "react";
import Nav from "../components/nav/nav";
import Image from "next/image";
import Title from "../components/utils/title";
import Footer from "../components/footer/footer";

function about() {
  return (
    <div>
      <Nav />
      <Title title={"ABOUT ME"} size="h1" />
      <div>
        <p>Descript de la petite Claire</p>
        {/* <Image src="" alt="Image de la petite Claire" />  */}
        <a>Lien vers son cv</a>
      </div>
      <div>
        <Title title={"WORK EXPERIENCES"}/>
        <p>Description à gauche</p>
        <p>Description à droite</p>
      </div>
      <div>
        <Title title={"MY FAVORITE TOOLS"} />
        <a>Un autre lien vers son CV car elle aime les CV</a>
        <div>Barre qui défile avec les expériences</div>
      </div>
      <div>
        <Title title={"MY STUDIES"}/>
        <p>Description à gauche</p>
        <p>Description à droite</p>
      </div>
      <Footer />
    </div>
  );
}

export default about;
