import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading as HeadingTitle,
  SectionHeading,
} from "../misc/Headings.js";
import { ProcessChildComponentsSeparately } from "DynamicPage.js";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Heading = tw(
  SectionHeading
)`w-full mt-4 font-black text-3xl sm:text-4xl lg:text-5xl text-center leading-tight `;

export default ({ index, properties, children }) => {
  const blogPosts = [
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
  ];
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          <Heading>{properties.heading}</Heading>
          <HeadingDescription>{properties.description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>{ProcessChildComponentsSeparately(children)}</ThreeColumn>
      </Content>
    </Container>
  );
};
