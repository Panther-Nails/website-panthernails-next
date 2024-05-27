import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "providers/SessionProvider";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";

export default function App() {
  const { hasNotificationSeen, language, languageObject } = useSession();

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

      {/* <p>
        {JSON.stringify({ ...languageObject, language, hasNotificationSeen })}
      </p> */}

      <Header links={headerLinks} />

      <RouterPaths />
    </>
  );
}
