import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";
import ScrollUpButton from "components/features/ScrollUpButton";
import Demo from "Demo";

export default function App() {
  const headerLinks = [
    { url: "/about", text: "About Us" },
    { url: "/pages/products/loyalty", text: "Rasik Loyalty Platform" },
    { url: "/pages/products/clm", text: "Contract Labour Management" },
    //    { url: "/blog", text: "Blog" },
    { url: "/contact", text: "Contact Us" },
  ];


  return (
    <>
      <GlobalStyles />

      <Header links={headerLinks} />
      <ScrollUpButton />

      {/* <Demo /> */}
      <RouterPaths />
    </>
  );
}
