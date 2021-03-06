import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/home/header/header";
import SelectedWorks from "../components/home/selectedWorks/selectedWorks";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { fetchAPI } from "../lib/api";

export default function Home({ projets }) {
  const [isOnPhone, setIsOnPhone] = useState(null);

  useEffect(() => {
    const phone = () => {
      if (window.matchMedia("(max-width: 480px)").matches) {
        setIsOnPhone(false);
      } else {
        setIsOnPhone(true);
      }


      document.querySelector(".hozizontal");
        gsap.registerPlugin(ScrollTrigger);

        const tween = gsap.to(".horizontal", {
          xPercent: -(19 + (projets.length - 2) * 60),
          scrollTrigger: {
            trigger: ".horizontal",
            pin: true,
            start: "top top",
            scrub: 1,
            end: "+=" + document.querySelector("#footer")?.offsetTop,
          },
        });
    };

    phone();
  }, [projets, isOnPhone]);

  return isOnPhone ? (
    <div>
      <Header />
      <div className="horizontal">
        <SelectedWorks projets={projets} />
      </div>
      <Footer />
    </div>
  ) : (
    <h1 style={{textAlign: "center"}} className="h1">Coming soon</h1>
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
