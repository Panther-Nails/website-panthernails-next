import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

// const Container = tw.div`fixed left-0 bottom-1/2 w-12 z-50 -translate-x-1`;
// const Link = tw.a`flex flex-row items-center justify-center w-12 h-12 p-4 rounded bg-white hocus:bg-gray-300 hocus:w-16 duration-200`;
// const LinkIcon = styled.img`w-full h-full`;

const positions = {
  right: tw`flex-col items-end right-0 bottom-1/2 translate-x-1`,
  left: tw`flex-col items-start left-0 bottom-1/2 -translate-x-1`,
  bottom: tw`flex-row items-end left-1/2 bottom-0 translate-y-1 `,
};

const StyledContainer = styled.div((props) => [
  tw`fixed flex z-50  `,

  positions[props.position],
]);

const Link = styled.a((props) => [
  tw`flex items-center w-8 h-8 p-2 rounded   hocus:(w-12 h-12  ) duration-300 `,
  props.show
    ? tw`-translate-x-1/2 duration-500`
    : tw`translate-x-full duration-700`,
  positions[props.position],
]);

const LinkIcon = styled.img`w-full h-full p-2 `;
const Rapper = tw.div`flex items-center w-12 h-12  mr-2 `;
export default ({ properties }) => {
  const [show, setShow] = useState(false);

  var parsedChildren = JSON.parse(properties.links || "[]");
  return (
    <>
      <StyledContainer position={properties?.position || "bottom"}>
        <Rapper
          onMouseEnter={() => setShow(true)}
          onClick={() => {
            setShow(show ? false : true);
          }}
        >
          <LinkIcon
            src={
              show
                ? "https://cdn-icons-png.flaticon.com/128/8066/8066266.png"
                :properties.imageSrc
            }
            onClick={() => {
              setShow(true);
            }}
          ></LinkIcon>
        </Rapper>
        {parsedChildren.map((item, index) => {
          return (
            <Link href={item.link} key={`${item.link}-${index}`} show={show}>
              <LinkIcon
                src={item.icon}
                onMouseEnter={() => setShow(true)}
              ></LinkIcon>
            </Link>
          );
        })}
      </StyledContainer>
    </>
  );
};
