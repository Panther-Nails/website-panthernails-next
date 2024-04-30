import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`;
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
    <Cards>
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
          <Card key={index}>
            <CardImage imageSrc={hpJson.imageSrc} />
            <CardContent>
              <span className="position">{hpJson.position}</span>
              <span className="name">{hpJson.title}</span>
              <CardLinks></CardLinks>
            </CardContent>
          </Card>
        );
      })}
    </Cards>
  );
};
