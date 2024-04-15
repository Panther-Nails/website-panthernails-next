import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "components/misc/Headings.js";
import { Description, HeadingTreact } from "components/misc/Typography";
import { Container } from "components/misc/Layouts";
import { getButtonByType } from "components/DynamicControls/Controls";
const Content = tw.div`max-w-screen-xl mx-auto py-8`;
const ThreeColumn = tw.div`flex flex-col items-center  lg:flex-row flex-wrap`;
const Column = tw.div`mt-12 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`,
]);

const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default ({
  data = {
    heading: "Popular Blog Posts",
    componentStyle: {
      buttonType: "Link",
    },
    componentProperties: {
      buttonText: "Read More",
      description:
        " Some amazing blog posts that are written by even more amazing people.",
      Cards: [
        {
          imageSrc:
            "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
          category: "Event Tips",
          title: "Finding Amazing Events Near You - Fast, Cheap & Free",
          url: "https://timerse.com",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1543365067-fa127bcb2303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
          category: "Reviews",
          title: "The Top Rated Musical Concerts Worldwide in 2019",
          url: "https://reddit.com",
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1499364615650-ec38552f4f34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
          category: "Discover",
          title: "This female band is making buzz all over the world",
          url: "https://timerse.com",
        },
      ],
    },
  },
}) => {
  let ButtonFromJson = getButtonByType(data.componentStyle.buttonType);

  return (
    <Container tw="h-screen">
      <Content>
        <HeadingInfoContainer>
          <HeadingTreact>{data.heading}</HeadingTreact>
          <Description>{data.componentProperties.description}</Description>
        </HeadingInfoContainer>
        <ThreeColumn>
          {data.componentProperties.Cards.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title tw="">{post.title}</Title>
                <Container>
                  {data.componentProperties.buttonText && (
                    <ButtonFromJson
                      href={data.componentProperties.buttonUrl}
                      target="blank"
                    >
                      {data.componentProperties.buttonText}
                    </ButtonFromJson>
                  )}
                </Container>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
