import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";

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
      HPJSON:
        '{"imageSrc":"https:\\/\\/images.unsplash.com\\/photo-1509824227185-9c5a01ceba0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80","title":"Hello"}',
    },
  ]);

  useEffect(() => {
    setData([...children]);
  }, [children]);

  return (
    <>
      {data.map((child, index) => {
        var hpJson = {};

        if (child.HPJSON) {
          hpJson = JSON.parse(child.HPJSON);
        }

        return (
          <Column key={index}>
            <Card>
              <span className="textContainer">
                <span className="title">{hpJson.heading}</span>
                <p className="description">{hpJson.description}</p>
              </span>
            </Card>
          </Column>
        );
      })}
    </>
  );
};
