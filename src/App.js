import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSession } from "providers/SessionProvider";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";
import ScrollUpButton from "components/features/ScrollUpButton";
import DockedButtons from "components/features/DockedButtons";

import RohanLearning from "pages/RohanLearning";
import CollapsableMenuSideBar from "components/layout/CollapsableMenuSideBar";
import { Routes, Route } from "react-router-dom";
import Rohan from "pages/Rohan";
import tw from "twin.macro";
import SiteHeader from "components/layout/SiteHeader";
import MenuDrawer from "components/layout/Drawer";
import { useState } from "react";

import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Drawer,
  Button,
  Field,
  Input,
  makeResetStyles,
  tokens,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { PrimaryButton } from "components/misc/Buttons";
import { MenuLink } from "components/layout/Controls";

const ScreenFull = tw.div`h-screen w-screen bg-gray-100 flex`;

const Content = tw.div`basis-full bg-white`;
const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export default function App() {
  const headerLinks = [
    { url: "/about", text: "About Us" },
    { url: "/pages/products/loyalty", text: "Rasik Loyalty Platform" },
    { url: "/pages/products/clm", text: "Contract Labour Management" },
    //    { url: "/blog", text: "Blog" },
    { url: "/contact", text: "Contact Us" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SiteHeader isOpen={isOpen} setIsOpen={setIsOpen} />

      <Routes>
        <Route exact path="/" element={<diuv>Home</diuv>} />
        <Route exact path="/data" element={<diuv>Data</diuv>} />
        <Route exact path="/profile" element={<diuv>Profile</diuv>} />
      </Routes>
    </>
  );
}
