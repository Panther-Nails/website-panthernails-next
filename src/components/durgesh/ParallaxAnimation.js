import { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

let isScrollRegistered = false;
const ParallaxAnimation = ({ children, depth }) => {
    const conatinerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      const movement = -(depth * 100);

      gsap.from(conatinerRef.children, {
        y: movement,
        ease: "none",
        scrollTrigger: {
          trigger: conatinerRef.children,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        }
      });
    }
  }, [depth]);
  return <div className="Parallax">{children}</div>;
};
export default ParallaxAnimation;
