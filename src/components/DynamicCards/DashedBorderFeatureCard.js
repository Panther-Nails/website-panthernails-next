import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-3 flex-shrink-0 relative`}
    img {
      ${tw`w-12 h-12`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-primary-500`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

export default ({ children }) => {
  const [data, setData] = useState([
    {
      imageSrc: "",
      heading: "Ads Management",
      description:
        "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou.",
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
              {hpJson.imageSrc && (
                <span className="imageContainer">
                  {hpJson.imageSrc && <img src={hpJson.imageSrc} alt="" />}
                </span>
              )}
              <span className="textContainer">
                <span className="title">{hpJson.heading}</span>
                <p className="description">{hpJson.description} </p>
              </span>
            </Card>
          </Column>
        );
      })}
    </>
  );
};
