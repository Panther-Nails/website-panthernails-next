import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import { CompanyLogo, Divider, MenuLink } from "./Controls";
import { Field, Input, Label } from "@fluentui/react-components";
import Drawer from "./Drawer";

const Container = tw.div`flex justify-between items-center shadow `;
const LogoColumn = tw.div`flex items-center gap-4 mx-5 my-2 py-1`;
const ProfileColumn = tw.div`flex items-center  gap-2 mx-5 py-1`;

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
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <LogoColumn>
          <MoreVertical32Regular
            onClick={() => props.setIsOpen(!props.isOpen)}
            ascent={tw`text-primary-500`}
          />
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
        isOpen={props.isOpen}
        setIsOpen={props.setIsOpen}
        title={
          //   <img
          //     src="https://play-lh.googleusercontent.com/IkkzDJ59I3NHCAiLjVlgSjSkrDURP3hIGbbXN2M24QM_H7f2rZ4hsOUpsrl6pTjqYj21=w240-h480-rw"
          //     alt="one app"
          //   />
          <Label size="large">One App</Label>
        }
      >
        {/* <MenuLink to="data" onClick={() => props.setIsOpen((prev) => !prev)}>
          Data
        </MenuLink>
        <MenuLink onClick={() => props.setIsOpen((prev) => !prev)}>
          Profile
        </MenuLink> */}
        <Divider />
        {menuData.map((obj) => {
          return (
            <>
              <Label size="medium">{obj.moduleName}</Label>

              {obj.Menus.map((menuItems) => {
                return (
                  <MenuLink
                    to={menuItems.Text}
                    onClick={() => props.setIsOpen((prev) => !prev)}
                  >
                    {menuItems.Link}
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
