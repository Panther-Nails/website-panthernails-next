import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";

const Column = tw.div`mt-24 lg:w-1/3 `;
const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full `;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({ as: "a" })`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`;

export default ({ index, properties, children }) => {
  return (
    <>
      <Column key={index}>
        <Card>
          <Image imageSrc={properties.imageSrc} />
          <Details>
            {properties.nameVisible === "true" && (
              <MetaContainer>
                <Meta>
                  <UserIcon />
                  <div>{properties.name}</div>
                </Meta>
                <Meta>
                  <TagIcon />
                  <div>{properties.category}</div>
                </Meta>
              </MetaContainer>
            )}
            <Title>{properties.title}</Title>
            <Description>{properties.description}</Description>
            {properties.buttonVisible === "true" && (
              <Link href={properties.url}>{properties.linkText}</Link>
            )}
          </Details>
        </Card>
      </Column>
    </>
  );
};
