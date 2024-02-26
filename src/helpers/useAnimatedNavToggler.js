
import { useAnimation, useCycle } from "framer-motion";
import React, { useEffect, useState } from "react";


//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavToggler() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [x, cycleX] = useCycle("0%", "150%");
  const animation = useAnimation();

  

  let toggleNavbar = () => {
    
    setShowNavLinks(!showNavLinks);
    animation.start({ x:x, display: "block" });
    
    
    cycleX();
    // animation.stop();

   
    
  };

 

  

  

  return {showNavLinks,animation, toggleNavbar }


  
}
