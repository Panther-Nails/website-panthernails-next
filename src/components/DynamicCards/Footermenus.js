import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ProcessChildComponentsSeparately } from "DynamicPage";

const LinkList = tw.ul`mt-6 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;
const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;
const ColumnHeading = tw.h5`uppercase font-bold`;

export default ({ index, children, properties }) => {
  var Default = JSON.parse(properties.inputs);
  // console.log("propertiesfootermanujson", properties);

  var menuLinks = JSON.parse(properties.menuLinks);

  return (
    <Column>
      <ColumnHeading>{properties.title}</ColumnHeading>
      <LinkList>
        {menuLinks.map((menulink, index) => (
          <LinkListItem>
            <Link href={menulink.link}>{menulink.title}</Link>
          </LinkListItem>
        ))}
      </LinkList>
    </Column>
  );
};
