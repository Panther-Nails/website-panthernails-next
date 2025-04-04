import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
// import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
const Link = tw.a`flex items-center w-12 h-12 p-4 rounded bg-white hocus:bg-gray-300 hocus:w-16 duration-200`;
const LinkIcon = styled.img`w-full h-full`;
const Card = tw.div`mt-4 lg:my-4 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center `;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-56 h-56 bg-contain bg-center rounded `}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-3 px-6 w-[70%] lg:w-[80%]`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-base lg:text-xl font-medium text-gray-900`}
  9
`;
const Heading = tw.span`text-base lg:text-xl h-12 font-bold text-gray-900  text-center`;
const CardLinks = styled.div`
  ${tw`mt-6 flex`}
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
      <CardImage imageSrc={properties.imageSrc} />
      <CardContent>
        {properties.position && (
          <span className="position">{properties.position}</span>
        )}
        <Heading>{properties.name}</Heading>
        {/* {links.length > 0 && (
          <CardLinks>
            {links.map((item, index) => {
              return (
                <Link href={item.link} key={index}>
                  <LinkIcon src={item.icon}></LinkIcon>
                </Link>
              );
            })}
          </CardLinks>
        )} */}
      </CardContent>
    </Card>
  );
};
