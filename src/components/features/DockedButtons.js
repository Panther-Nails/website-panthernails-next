import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

// const Container = tw.div`fixed left-0 bottom-1/2 w-12 z-50 -translate-x-1`;
// const Link = tw.a`flex flex-row items-center justify-center w-12 h-12 p-4 rounded bg-white hocus:bg-gray-300 hocus:w-16 duration-200`;
// const LinkIcon = styled.img`w-full h-full`;

const positions = {
  right: tw`flex-col items-end right-0 bottom-1/2 translate-x-1`,
  left: tw`flex-col items-start left-0 bottom-1/2 -translate-x-1`,
  bottom: tw`flex-row items-end left-1/2 bottom-0 translate-y-1 `,
};

const StyledContainer = styled.div((props) => [
  tw`fixed flex z-50 `,
  positions[props.position],
]);

const Link = tw.a`flex items-center w-12 h-12 p-4 rounded bg-white hocus:bg-gray-300 hocus:w-16 duration-200`;
const LinkIcon = styled.img`w-full h-full`;

// const StyledContainer = styled(Container) `
//   ${tw`flex-col items-end right-0 bottom-1/2 translate-x-1`}
// `;

// const TextColumn = styled(Column)((props) => [
//   tw`md:w-6/12 mt-8 md:mt-0`,
//   props.textOnLeft === "true"
//     ? tw`md:mr-8 lg:mr-16 md:order-first`
//     : tw`md:ml-8 lg:ml-16 md:order-last`,
// ]);

export default ({ data, properties, children, index }) => {
  console.log(JSON.stringify(properties));

  var links =
    '[{"icon":"https://cdn-icons-png.flaticon.com/128/5968/5968771.png","link":"https://www.facebook.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/3991/3991775.png","link":"https://www.linkedin.com/company/panthernails/?viewAsMember=true"},{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504947.png","link":"https://x.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/2111/2111463.png","link":"https://www.instagram.com/panthernails_loyalty?igsh=aG5mMHVuMm5lOXNw"}]';
  var parsedChildren = JSON.parse(properties.links);
  return (
    <>
      <StyledContainer position={properties?.position || "bottom"}>
        {parsedChildren.map((item, index) => {
          return (
            <>
              <Link href={item.link} key={index}>
                <LinkIcon src={item.icon}></LinkIcon>
              </Link>
            </>
          );
        })}
      </StyledContainer>
    </>
  );
};
