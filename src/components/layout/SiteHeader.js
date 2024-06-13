import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import { CompanyLogo, Divider, MenuLink } from "./Controls";
import {
  tokens,
  Field,
  Input,
  Label,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  makeStyles,
  Menu,
} from "@fluentui/react-components";
import Drawer from "./Drawer";

const Container = tw.div`flex justify-between items-center shadow `;
const LogoColumn = tw.div`flex items-center gap-4 mx-5 my-2 py-1`;
const ProfileColumn = tw.div`flex items-center  gap-2 mx-5 py-1`;
const MenuIconContainer = tw.div`cursor-pointer`;

export default (props) => {
  const menuData = [
    {
      moduleName: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      moduleName: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      moduleName: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      moduleName: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      moduleName: "Masters",
      Menus: [
        {
          Text: "Employee Master has child menu",
          Link: "employee",
          Child: [
            { Text: "Employee Master", Link: "employee" },
            { Text: "Employee Master", Link: "employee" },
          ],
        },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <LogoColumn>
          <MenuIconContainer>
            <MoreVertical32Regular
              onClick={() => props.setIsOpen(!props.isOpen)}
              ascent={tw`text-primary-500`}
              className="cursor-pointer"
            />
          </MenuIconContainer>

          <CompanyLogo to="" />

          <Field>
            <Input type="search" placeholder="start typing to search..." />
          </Field>
        </LogoColumn>

        <ProfileColumn>
          <MenuLink to="/profile">Profile</MenuLink>
          <Person32Regular />
        </ProfileColumn>
      </Container>
      <Drawer
        isShowFooter={true}
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        title={<Label size="large">One App</Label>}
      >
        <Divider />
        {menuData.map((obj) => {
          return (
            <>
              <Label size="large">{obj.moduleName}</Label>

              {obj.Menus.map((menuItems) => {
                if (menuItems.Child) {
                  return (
                    <MenuList>
                      <Menu>
                        <MenuTrigger>
                          <MenuLink>{menuItems.Text}</MenuLink>
                        </MenuTrigger>
                        <MenuPopover>
                          <MenuList>
                            {menuItems.Child.map((obj) => {
                              return (
                                <MenuLink to={menuItems.Link}>
                                  {obj.Text}
                                </MenuLink>
                              );
                            })}
                          </MenuList>
                        </MenuPopover>
                      </Menu>
                    </MenuList>
                  );
                }

                return (
                  <MenuLink
                    to={menuItems.Link}
                    onClick={() => props.setIsOpen((prev) => !prev)}
                  >
                    {menuItems.Text}
                  </MenuLink>
                );
              })}
            </>
          );
        })}
      </Drawer>
    </>
  );
};
