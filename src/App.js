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

export default function App() {
  const { popupRenderer } = useSession();

  return (
    <>
      <GlobalStyles />
      <Header />
      <ScrollUpButton />
      <PopupModal>{popupRenderer}</PopupModal>
      <RouterPaths />
      <ToastContainer />
    </>
  );
}
