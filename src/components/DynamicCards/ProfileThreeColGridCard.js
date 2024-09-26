import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
// import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
const Link = tw.a`flex items-center w-12 h-12 p-4 rounded bg-white hocus:bg-gray-300 hocus:w-16 duration-200`;
const LinkIcon = styled.img`w-full h-full`;
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/4 flex flex-col items-center`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

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
  var links = JSON.parse(properties.inputs);
  
  return (
    <Card key={index}>
      <CardImage imageSrc={properties.imageSrc} />
      <CardContent>
        <span className="position">{properties.position}</span>
        <span className="name">{properties.name}</span>
        <CardLinks>
        {links.map((item, index) => {
            return (
              <>
                <Link href={item.link} key={index}>
                  <LinkIcon src={item.icon}></LinkIcon>
                </Link>
              </>
            );
          })}
       
        </CardLinks>
      </CardContent>
    </Card>
  );
};
