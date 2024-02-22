import { useEffect,useRef } from "react";
import gsap from "gsap";
import _ScrollTrigger from "gsap/ScrollTrigger";

let isScrollRegistered = false
export default ({children,y,duration}) => {
    const containerRef = useRef(null)
    if(duration == null){
        duration = 0.5
       
    }
    
    useEffect(()=>{
        if(typeof window !== 'undefined' && !isScrollRegistered){
            gsap.registerPlugin(_ScrollTrigger);
            isScrollRegistered = true

        }
        // console.log(containerRef.current.children,'containerRef.current.children')
        gsap.from(containerRef.current.children,{
            
        //    rotate:360,
            y:y,
            opacity:0,
            duration:duration,
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
