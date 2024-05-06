import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "providers/SessionProvider";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";

export default function App() {
  const { hasNotificationSeen, language, languageObject } = useSession();

  return (
    <>
      <GlobalStyles />

      {/* <p>
        {JSON.stringify({ ...languageObject, language, hasNotificationSeen })}
      </p> */}

      <Header />

      <RouterPaths />
    </>
  );
}
