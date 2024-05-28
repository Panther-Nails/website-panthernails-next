import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {
  Container as ContainerBase,
  ContentWithPaddingXl as ContentBase,
} from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "images/checkbox-circle.svg";
import { ProcessChildComponentsSeparately } from "DynamicPage";

const Container = tw(ContainerBase)`bg-primary-900 text-gray-100 -mx-8 px-8`;
const ContentWithPaddingXl = tw(
  ContentBase
)`relative z-10 mx-auto px-0 py-10 sm:px-6 md:px-8 lg:px-12 xl:px-24 sm:py-20 flex flex-col max-w-screen-xl`;
const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full `;
const Description = tw(SectionDescription)`w-full text-gray-300 text-center`;

const PlansContainer = tw.div`mt-16 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between text-gray-900 font-medium`;

const WhiteBackgroundOverlay = tw.div`absolute inset-x-0 bottom-0 h-1/6 lg:h-1/3 bg-white z-0`;

export default ({
  children,
  properties,
  index,
  plans = null,
  primaryButtonText = "Create Server",
}) => {
  const defaultPlans = [
    {
      name: "Personal",
      price: ["$9", ".99/month"],
      oldPrice: "$11.99",
      description:
        "Perfect for when you want to host your personal blog or a hobby side project.",
      features: [
        "2 Core Xeon CPU",
        "1 GB RAM",
        "30 GB SSD",
        "1 TB Transfer",
        "99.9% Uptime",
      ],
      url: "https://google.com",
    },
    {
      name: "Business",
      price: ["$15", ".99/month"],
      oldPrice: "$19.99",
      description:
        "Perfect for hosting blogs with lots of traffic or heavy development projects",
      features: [
        "4 Core Xeon CPU",
        "2 GB RAM",
        "100 GB SSD",
        "3 TB Transfer",
        "99.9% Uptime",
        "Free Domain & SSL",
        "Free DNS Management",
      ],
      url: "https://google.com",
      featured: "Most Popular",
    },
    {
      name: "Enterprise",
      price: ["$25", ".99/month"],
      oldPrice: "$29.99",
      description:
        "Perfect for hosting production websites & API services with high traffic load",
      features: [
        "8 Core Xeon CPU",
        "8 GB RAM",
        "300 GB SSD",
        "Unlimited Transfer",
        "99.99% Uptime",
        "Free Domain & SSL",
        "Free DNS Management",
        "Free Offsite Backup",
      ],
      url: "https://google.com",
    },
  ];

  if (!plans) plans = defaultPlans;

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderContainer>
          {properties.subheading && (
            <Subheading>{properties.subheading}</Subheading>
          )}
          <Heading>{properties.heading}</Heading>
          {properties.description && (
            <Description>{properties.description}</Description>
          )}
        </HeaderContainer>
        <PlansContainer>
          {ProcessChildComponentsSeparately(children)}
        </PlansContainer>
      </ContentWithPaddingXl>
      <WhiteBackgroundOverlay />
    </Container>
  );
};
