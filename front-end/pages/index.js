import { useEffect } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/home/header/header";
import SelectedWorks from "../components/home/selectedWorks/selectedWorks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { fetchAPI } from "../lib/api";

export default function Home({ projets }) {
  useEffect(() => {
    document.querySelector(".hozizontal");
   

    gsap.registerPlugin(ScrollTrigger);

    const isTriggered = () => {
      console.log("trigger");
    };
    const tween = gsap.to(".horizontal", {
      xPercent: -(19 + (projets.length - 2) * 60),
      scrollTrigger: {
        trigger: ".horizontal",
        pin: true,
        start: "top top",
        scrub: 1,
        end: "+=" + document.querySelector("#footer").offsetTop,
      },
    });
  }, [projets]);

  return (
    <div>
      <Header />
      <div className="horizontal">
        <SelectedWorks projets={projets} />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const projetsRes = await fetchAPI("/projets", { populate: "*" });

  return {
    props: {
      projets: projetsRes.data,
    },
    revalidate: 1,
  };
}
