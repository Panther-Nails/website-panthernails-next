import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
// import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
const Link = tw.a`flex items-center w-10 h-10 p-2 mt-3 rounded bg-white hocus:bg-gray-300 hocus:scale-[130%] duration-200`;
const LinkIcon = styled.img`w-full h-full`;
const Card = tw.div`mt-12 lg:my-12 w-[full] sm:w-1/2 lg:w-1/4 flex flex-col items-center  `;
const InnerCard = tw.div`flex flex-col items-center text-center h-16 px-5 `;
const ImageWrapper = tw.div`w-64 h-64 px-1 rounded`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-[100%] h-[100%] bg-contain bg-center rounded bg-no-repeat  `}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center `}
  .position {
    ${tw`uppercase mt-2 font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`mt-3 flex `}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`;

export default ({ index, properties }) => {
  var links = JSON.parse(properties.inputs || "[]");

  return (
    <Card key={index}>
      <ImageWrapper>
        <CardImage imageSrc={properties.imageSrc} />
      </ImageWrapper>
      <CardContent>
        <InnerCard>
          <span className="name">{properties.name}</span>
          {properties.position && (
            <span className="position">{properties.position}</span>
          )}
        </InnerCard>
        {links.length > 0 && (
          <CardLinks>
            {links.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <LinkIcon src={item.icon}></LinkIcon>
                </Link>
              );
            })}
          </CardLinks>
        )}
      </CardContent>
    </Card>
  );
};
