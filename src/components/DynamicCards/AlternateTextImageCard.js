import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div((props) => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-lg leading-loose`;

const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20 mb-2`;

export default ({ index, properties, children }) => {

  return (
    <Card key={index} reversed={index % 2 === 1}>
      <Image imageSrc={properties.imageSrc} />
      <Details>
        <CustomerInfo>
          <CustomerProfilePicture
            src={properties.profileImageSrc}
          ></CustomerProfilePicture>
        </CustomerInfo>
        <Title>{properties.title}</Title>
        <Description>{properties.description}</Description>
      </Details>
    </Card>
  );
};
