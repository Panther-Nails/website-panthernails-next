import React, { useState, useTransition } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { MoreVertical32Regular, Person32Regular } from "@fluentui/react-icons";

import { CompanyLogo, Divider, MenuLink } from "./Controls";
import {
  Field,
  Input,
  Label,
  SearchBox,
  Tree,
  TreeItem,
  TreeItemLayout,
} from "@fluentui/react-components";
import Drawer from "./Drawer";
import useSiteHeaderHelper from "./useSiteHeaderHelper";

const Container = tw.div`flex justify-between items-center shadow `;
const LogoColumn = tw.div`flex items-center gap-4 mx-5 my-2 py-1`;
const ProfileColumn = tw.div`flex items-center  gap-2 mx-5 py-1`;
const MenuIconContainer = tw.div`cursor-pointer`;

export default (props) => {
  const data = [
    {
      Text: "Masters",
      Menus: [
        { Text: "Employee Master", Link: "employee" },
        { Text: "Profile Master", Link: "profile" },
        { Text: "Data Master", Link: "data" },
      ],
    },
    {
      Text: "Transaction",
      Menus: [
        { Text: "Service Plan", Link: "employee" },
        { Text: "Event", Link: "profile" },
        {
          Text: "Data ",
          Link: "data",
          Menus: [
            { Text: "Data 1", Link: "employee" },
            { Text: "Data 2", Link: "employee" },
          ],
        },
      ],
    },
    {
      Text: "Utilities",
      Menus: [
        { Text: "Theme", Link: "employee" },
        { Text: "Notification", Link: "profile" },
        { Text: "SMS", Link: "employee" },
        { Text: "Notification", Link: "profile" },
        { Text: "Theme", Link: "employee" },
        { Text: "Notification", Link: "profile" },
      ],
    },
    {
      Text: "Components",
      Menus: [
        { Text: "Blogs", Link: "employee" },
        { Text: "Cards", Link: "profile" },
        {
          Text: "Headers",
          Link: "data",
          Menus: [
            { Text: "Sub Menu 1", Link: "employee" },
            { Text: "Sub Menu 2", Link: "employee" },
          ],
        },
      ],
    },
    {
      Text: "Concepts",
      Menus: [
        {
          Text: "Introduction",
          Link: "Introduction",
        },
        { Text: "Developer", Link: "Developer" },
        { Text: "Migration", Link: "Migration" },
      ],
    },
  ];

  const [menuData, setMenuData] = React.useState(data);
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
        data={data}
        menuData={menuData}
        setMenuData={setMenuData}
      >
        <Divider />
        {menuData.map((obj) => {
          return (
            <>
              <Label size="large">{obj.Text}</Label>

              {obj.Menus.map((menuItems) => {
                if (menuItems.Menus) {
                  return (
                    <Tree
                      aria-label="Default"
                      defaultOpenItems={[menuItems.Text]}
                    >
                      <TreeItem itemType="branch" value={menuItems.Text}>
                        <TreeItemLayout>{menuItems.Text}</TreeItemLayout>
                        <Tree>
                          {menuItems.Menus.map((obj) => {
                            return (
                              <TreeItem itemType="leaf">
                                <TreeItemLayout>
                                  <MenuLink to={obj.Link}>{obj.Text} </MenuLink>
                                </TreeItemLayout>
                              </TreeItem>
                            );
                          })}
                        </Tree>
                      </TreeItem>
                    </Tree>
                  );
                } else {
                  return (
                    <Tree aria-label="Default">
                      <TreeItem itemType="leaf">
                        <TreeItemLayout>
                          <MenuLink to={menuItems.Link}>
                            {menuItems.Text}
                          </MenuLink>
                        </TreeItemLayout>
                      </TreeItem>
                    </Tree>
                  );
                }
              })}
            </>
          );
        })}
      </Drawer>
    </>
  );
};
