import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tw from "twin.macro";
import styled from "styled-components";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import { useState } from "react";

import {
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  OverlayDrawer,
  Button,
  Field,
  Input,
  makeResetStyles,
  tokens,
} from "@fluentui/react-components";
import { ArrowLeftRegular } from "@fluentui/react-icons";

const ScreenFull = tw.div`h-screen w-screen bg-gray-100 flex`;

const Content = tw.div`basis-full bg-white`;
const useStackClassName = makeResetStyles({
  display: "flex",
  flexDirection: "column",
  rowGap: tokens.spacingVerticalL,
});

export default ({ title, children, isOpen, setIsOpen }) => {
  return (
    <OverlayDrawer
      open={isOpen}
      size="small"
      separator={true}
      modalType="modal"
      position="start"
      onOpenChange={(_, { open }) => setIsOpen(open)}
    >
      <DrawerHeader>
        <DrawerHeaderTitle
          action={
            <Button
              appearance="subtle"
              aria-label="Close"
              icon={<ArrowLeftRegular />}
              onClick={() => setIsOpen(false)}
            />
          }
        >
          {title}
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>{children}</DrawerBody>
    </OverlayDrawer>
  );
};
