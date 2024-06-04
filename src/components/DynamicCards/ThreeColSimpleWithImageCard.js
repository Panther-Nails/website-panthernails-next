import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
const Column = tw.div`mt-24 lg:w-1/3 flex items-center justify-center`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  `background-size: cover;`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded flex items-center justify-center`,
]);

const Card = styled.div((props) => [
  ` text-align: ${props.textAlign};`,
  tw`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`,
]);

const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default ({ index, properties, children }) => {
  return (
    <>
      <Column key={index}>
        <Card textAlign={properties.textAlign}>
          <Image tw="">
            <img src={properties.imageSrc} alt={properties.title}></img>
            {console.log(properties.imageSrc)}
          </Image>
          <Category>{properties.category}</Category>
          <Title>{properties.title}</Title>
          {properties.buttonVisible === "true" && (
            <Link href={properties.url}>{properties.buttonText}</Link>
          )}
        </Card>
      </Column>
    </>
  );
};
