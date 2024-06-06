import { Container, Content2Xl } from "components/misc/Layouts";
import React, { useState } from "react";
import tw from "twin.macro";
import { MenuList, MenuItem, MenuPopover } from "@fluentui/react-components";
import { bundleIcon, CutRegular, CutFilled } from "@fluentui/react-icons";

const MenuContainer = tw.div`h-screen  p-5`;
const CutIcon = bundleIcon(CutFilled, CutRegular);

export default ({}) => {
  const menuItems = [
    {
      MenuID: 1,
      MenuName: "Home",
    },
    {
      MenuID: 2,
      MenuName: "Medical Emergency",
    },
    {
      MenuID: 3,
      MenuName: "Visitors",
    },
  ];

  return (
    <>
      <Container>
        <MenuContainer>
          <MenuList>
            {menuItems.map((obj) => {
              return <MenuItem icon={<CutIcon />}>{obj.MenuName}</MenuItem>;
            })}
          </MenuList>
        </MenuContainer>
      </Container>
    </>
  );
};
