import React, { lazy, Suspense } from "react";
import GlobalStyles from "styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import { SWRConfig } from "swr";
import { BS64PNE36Encryption } from "turbo/lib/cjs/Encryption/BS64PNE36Encryption";
import FallbackLoading from "helpers/FallbackLoading";

const RouterPaths = lazy(() => import("./RouterPaths"));
const Header = lazy(() => import("./components/headers/light"));
const ScrollUpButton = lazy(() =>
  import("./components/features/ScrollUpButton")
);

export default function App() {
  function localStorageProvider() {
    var bs = new BS64PNE36Encryption();

    const cacheFromLocalStorage = JSON.parse(
      bs.decrypt(localStorage.getItem("app-cache") || "xXR=")
    );

    const map = new Map(cacheFromLocalStorage);

    window.addEventListener("beforeunload", () => {
      const appCache = JSON.stringify(Array.from(map.entries()));
      localStorage.setItem("app-cache", bs.encrypt(appCache));
    });

    return {
      get: (key) => map.get(key),
      set: (key, value) => map.set(key, value),
      delete: (key) => map.delete(key),
      keys: () => map.keys(),
    };
  }

  // For google translsate
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "en",
  //       autoDisplay: false,
  //     },
  //     "google_translate_element"
  //   );
  // };

  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  return (
    <>
      <Suspense fallback={<FallbackLoading />}>
        <SWRConfig value={{ provider: localStorageProvider }}>
          <GlobalStyles />
          <Header />
          <ScrollUpButton />
          <RouterPaths />
          <ToastContainer />
        </SWRConfig>
      </Suspense>
    </>
  );
}
