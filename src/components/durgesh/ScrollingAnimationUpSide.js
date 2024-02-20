import { useEffect,useRef } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

let isScrollRegistered = false
export default ({children,y}) => {
    const containerRef = useRef(null)
    useEffect(()=>{
        if(typeof window !== 'undefined' && !isScrollRegistered){
            gsap.registerPlugin(_ScrollTrigger);
            isScrollRegistered = true

        }
        gsap.from(containerRef.current.children,{
        //    rotate:360,
            y:y,
            opacity:0,
            duration:0.5,
            scrollTrigger:{
                trigger:containerRef.current,
                start:"top 80%",
                end:"bottom 10%",
                toggleActions:"play none none reverse"
            }
        })
    },[]);
    return <div ref={containerRef}>{children}</div>
};
