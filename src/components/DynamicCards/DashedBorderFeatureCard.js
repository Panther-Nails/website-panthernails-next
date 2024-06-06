import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;
const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12 justify-between w-96 duration-300 hover:cursor-pointer transform hover:scale-105`}
  .imageContainer {
    ${tw`border-2 border-primary-500  rounded-full p-3 `}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500 `}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;
export default ({ properties, children, index }) => {
  return (
    <Column key={index}>
      <Card>
        <span className="imageContainer">
          <img src={properties.imageSrc} alt="" />
        </span>
        <span className="textContainer">
          <span className="title">{properties.heading}</span>
          <p className="description">{properties.description}</p>
        </span>
        {properties.buttonVisible === "true" && (
          <Link href={properties.buttonUrl}>{properties.buttonText}</Link>
        )}
      </Card>
    </Column>
  );
};
