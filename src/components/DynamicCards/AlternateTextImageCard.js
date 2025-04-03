import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Card = styled.div((props) => [
  tw`mt-12 flex flex-col md:flex-row justify-center items-center`,
  props.reversed ? tw`md:flex-row-reverse` : "flex-row",
]);
const Image = tw.img`md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`;

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8 px-3`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-lg `;

const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20 mb-2`;
const UnorderList = tw.ul`px-5`;
const ListHeading = tw.p` text-black font-bold my-1`;
const ListItem = tw.li`list-disc py-1`;
const ListContainer = tw.div` mt-5 `;

export default ({ index, properties }) => {
  let List;
  if (properties.listData) {
    List = JSON.parse(properties.listData);
  }
  return (
    <Card key={index} reversed={index % 2 === 1}>
      <Image src={properties.imageSrc} />
      <Details>
        {properties.profileImageSrc && (
          <CustomerInfo>
            <CustomerProfilePicture
              src={properties.profileImageSrc}
            ></CustomerProfilePicture>
          </CustomerInfo>
        )}
        {properties.title && <Title>{properties.title}</Title>}
        {properties.description && (
          <Description>{properties.description}</Description>
        )}
        {properties.listData && (
          <ListContainer>
            <ListHeading>{List.listHeading}</ListHeading>
            <UnorderList>
              {List.listItems.map((item, key) => {
                return <ListItem>{item}</ListItem>;
              })}
            </UnorderList>
          </ListContainer>
        )}
        {properties.secondDescription && (
          <Description>{properties.secondDescription}</Description>
        )}
      </Details>
    </Card>
  );
};
