import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";
import ScrollUpButton from "components/features/ScrollUpButton";
import PopupModal from "helpers/PopupModal";
import { useSession } from "providers/SessionProvider";

import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";

export default function App() {
  const { popupRenderer } = useSession();
  function localStorageProvider() {
    const test = JSON.parse(localStorage.getItem("app-cache") || "[]");
    const map = new Map(test);
    //console.log("map", Array.from(map.entries()));

    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", appCache);
    });

    return {
      get: (key) => map.get(key),
      set: (key, value) => map.set(key, value),
      delete: (key) => map.delete(key),
      keys: () => map.keys(),
    };
  }

  return (
    <>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <GlobalStyles />
        <Header />
        <ScrollUpButton />
        <PopupModal>{popupRenderer}</PopupModal>
        <RouterPaths />
        <ToastContainer />
      </SWRConfig>
    </>
  );
}
