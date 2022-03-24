import React, { useEffect } from "react";
import styles from "./selectedWorks.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function SelectedWorks({ projects }) {
  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {
  console.log(projects)

    const containerSelectedWorks = document.getElementById("containerSelectedWorks");
    containerSelectedWorks.style.height = `${2 * 100}vh`;
    // gsap.to(containerSelectedWorks, {
    //   scrollTrigger: {
    //     trigger: "#containerSelectedWorks",
    //     start: "0% 0%",
    //     pin: true,
    //     end: "200% 200%",
    //   }
    // })
    
    const isTriggered = () => {
      console.log("trigger")
    }
    const tween = gsap.to(".containerSelectedWorks", {
      xPercent: -200,
      scrollTrigger: {
        trigger: ".containerSelectedWorks",
        pin: true,
        start: "top top",
        scrub: 1,
        end: "2000",
        onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive),
        onUpdate: () => {
          isTriggered()
        },
      },
    });

  
  }, [projects]);

  return (
    <div id="containerSelectedWorks" className={styles.container}>
      selected-works
    </div>
  );
}


