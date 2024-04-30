import React, { useState } from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "providers/SessionProvider";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";

import { NavLink } from "react-router-dom";

export default function App() {
  const { hasNotificationSeen } = useSession();

  return (
    <>
      <GlobalStyles />

      {hasNotificationSeen ? "seen" : "not seen"}

      <Header />

      <RouterPaths />
    </>
  );
}
