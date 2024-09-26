import React from "react";
import tw from "twin.macro";

const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;

export default ({ index, children, properties }) => {

  return (
    <LinkListItem>
      <Link href={properties.link}>{properties.title}</Link>
    </LinkListItem>
  );
};
