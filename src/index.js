import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Modal from "react-modal";
import { SessionProvider } from "providers/SessionProvider";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";

Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
      <SessionProvider>
        <App />
      </SessionProvider>
    </BrowserRouter>
  </FluentProvider>
);
