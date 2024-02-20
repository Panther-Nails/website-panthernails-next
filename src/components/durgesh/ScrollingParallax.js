import { useEffect } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/dist/ScrollTrigger";

let isScrollRegistered = false
const ScrollAnimation = ({children})=>{
    const containerRef = useRef(null)
    useEffect(()=>{
        if(typeof window !== 'undefined' && !isScrollRegistered){
            gsap.registerPlugin(_ScrollTrigger);
            isScrollRegistered = true

        }
        gsap.from(containerRef.current.children,{
        //    rotate:360,
            y:50,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:containerRef.current,
                start:"top 80%",
                end:"bottom 20%",
                toggleActions:"play none none reverse"
            }
        })
    },[]);
    return <div ref={containerRef}>{children}</div>
};
export default ScrollAnimation;