import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Content = tw.div`mt-16`;

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

export default ({ children }) => {
  const [data, setData] = useState([
    {
      ComponentOrder: 1,
      ComponentID: 161,
      ComponentName: "ProfileCard",
      Section: "DynamicCards",
      IsParentComponent: true,
      Deleted: false,
      CompanyID: 217,
      SubscriberID: 1140,
      CHPJSON:
        '{"imageSrc":"https:\\/\\/images.unsplash.com\\/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80","title":"Hello"}',
    },
  ]);

  console.log("children", JSON.stringify(children));

  useEffect(() => {
    setData([...children]);
  }, [children]);
  return (
    <Content>
      {data.map((child, index) => {
        <div>{child.ComponentName}</div>;
        console.log("child", child.ComponentName);
        // var cpJson = {};
        var hpJson = {};

        // if (child.CCPJSON) {
        //   cpJson = JSON.parse(child.CCPJSON);
        // }

        if (child.CHPJSON) {
          hpJson = JSON.parse(child.CHPJSON);
          console.log(hpJson);
        }

        return (
          <Card key={index} reversed={index % 2 === 1}>
            <Image imageSrc={hpJson.imageSrc} />
            <Details>
              <CustomerInfo>
                <CustomerProfilePicture
                  src={hpJson.profileImageSrc}
                ></CustomerProfilePicture>
              </CustomerInfo>
              <Title>{hpJson.title}</Title>
              <Description>{hpJson.description}</Description>
            </Details>
          </Card>
        );
      })}
    </Content>
  );
};
