import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Modal from "react-modal";

import { SessionProvider } from "providers/SessionProvider";

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <SessionProvider>
      <App />
    </SessionProvider>
  </BrowserRouter>
);
