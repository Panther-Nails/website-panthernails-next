import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";
const Column = styled.div`
  ${tw`lg:w-full max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({ index, properties, children }) => {
  return (
    <>
      <Column key={index}>
        <Card href={properties.url}>
          <span className="imageContainer">
            <img src={properties.imageSrc} alt="" />
          </span>
          <span className="title">{properties.title}</span>
          <p className="description">{properties.description}</p>
          {properties.buttonVisible === "true" && (
            <span className="link">
              <span>{properties.buttonText}</span>
              <ArrowRightIcon className="icon" />
            </span>
          )}
        </Card>
      </Column>
    </>
  );
};
