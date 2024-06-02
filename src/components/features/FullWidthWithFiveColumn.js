import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Description = tw(SectionDescription)`w-full text-center`;

const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center relative gap-3`;
const Plan = styled.div`
  ${tw`flex max-w-sm mt-3 text-center px-8 rounded-lg shadow relative pt-2  gap-3 text-gray-900 bg-white lg:w-1/4`}
  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full w-48 mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-2 bg-gray-100`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-500 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;

export default ({
  properties,
  children,
  index,
  plans = null,
  linkText = "Learn More",
  imageContainerCss = null,
  imageCss = null,
}) => {
  // var defaultPlans = [
  //   {
  //     imageSrc:
  //       "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/615.png",
  //     title: "Secure",
  //     description:
  //       "We strictly only deal with vendors that provide top notch security.",
  //     url: "/contact",
  //     bgColor: "#9FE2BF",
  //   },
  //   {
  //     imageSrc:
  //       "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/621.png",
  //     title: "24/7 Support",
  //     description: "Lorem ipsum donor amet siti ceali placeholder text",
  //     url: "/contact",
  //     bgColor: "#40E0D0",
  //   },
  //   {
  //     imageSrc:
  //       "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/617.png",
  //     title: "Customizable",
  //     description: "Lorem ipsum donor amet siti ceali placeholder text",
  //     url: "/contact",
  //     bgColor: "#6495ED",
  //   },
  //   {
  //     imageSrc:
  //       "https://oneapp.panthernails.com/FS/WSM/WebsiteAsset/217/621.png",
  //     title: "24/7 Support",
  //     description: "Lorem ipsum donor amet siti ceali placeholder text",
  //     url: "/contact",
  //     bgColor: "#CCCCFF",
  //   },
  // ];

  // if (!plans) plans = defaultPlans;

  var inputs = JSON.parse(properties.inputs);
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          <HighlightedHeading>{properties.heading}</HighlightedHeading>
          <Description>{properties.description}</Description>
        </HeaderContainer>
        <PlansContainer>
          {inputs.map((input, index) => (
            <Plan key={index} bgColor={input.bgColor}>
              {!input.featured && <div className="planHighlight" />}
              <Card href={input.url} target="_blank">
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={input.imageSrc} alt="" css={imageCss} />
                </span>
                <span className="title">{input.title}</span>
                <p className="description">{input.description}</p>
                {input.url && (
                  <span className="link">
                    <span target="_blank">{linkText}</span>
                    <ArrowRightIcon className="icon" />
                  </span>
                )}
              </Card>
            </Plan>
          ))}
          <DecoratorBlob />
        </PlansContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
