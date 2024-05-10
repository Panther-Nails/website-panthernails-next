import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import defaultCardImage from "images/shield-icon.svg";

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

export default ({ index, properties, children }) => {
  console.log("properties", properties);
  return (
    <Column key={index}>
      <Card>
        <span className="imageContainer">
          <img src={properties.imageSrc} alt="" />
        </span>
        <span className="textContainer">
          <span className="title">{properties.title}</span>
          <p className="description">{properties.description}</p>
        </span>
      </Card>
    </Column>
  );
};
