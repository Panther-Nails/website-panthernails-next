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
  DrawerFooter,
  SearchBox,
  makeStyles,
} from "@fluentui/react-components";
import { ArrowLeftRegular } from "@fluentui/react-icons";

import useDrawerHelper from "./useDrawerHelper";

const useStyles = makeStyles({
  base: {
    marginTop: "10px",
    width: "100%",
  },
});

export default ({
  title,
  children,
  isOpen,
  setIsOpen,
  isShowFooter,
  data,
  // menuData,
  setMenuData,
}) => {
  const styles = useStyles();

  const { handleMenuSearch, handleDrawerClose } = useDrawerHelper();

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
              onClick={() => {
                setIsOpen(false);
                handleDrawerClose(setMenuData, data);
              }}
            />
          }
        >
          {title}
          <SearchBox
            appearance="outline"
            className={styles.base}
            onChange={(e) => handleMenuSearch(e, data, setMenuData)}
          />
        </DrawerHeaderTitle>
      </DrawerHeader>

      <DrawerBody>{children}</DrawerBody>
      {isShowFooter && <DrawerFooter>Setting</DrawerFooter>}
    </OverlayDrawer>
  );
};
