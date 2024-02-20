import { useEffect,useRef } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

let isScrollRegistered = false
const ScrollAnimation = ({children,scale})=>{
    const containerRef = useRef(null)
    useEffect(()=>{
        if(typeof window !== 'undefined' && !isScrollRegistered){
            gsap.registerPlugin(_ScrollTrigger);
            isScrollRegistered = true

        }
        gsap.from(containerRef.current.children,{
            scale:scale,
            // opacity:0,
            // y:50,
            duration:0.8,
            scrollTrigger:{
                trigger:containerRef.current,
                start:"top 30%",
                end:"bottom 10%",
                toggleActions:"play none  none reverse"
            }
        })
    },[]);
    return <div ref={containerRef}>{children}</div>
};
export default ScrollAnimation;