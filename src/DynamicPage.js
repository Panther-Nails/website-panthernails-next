import React from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import { Heading, Subheading } from "components/misc/Typography";

import { HEADER_HEIGHT } from "@fluentui/react";
import Hero from "components/hero/DurgeshHero";
import ServicesSection from "components/durgesh/ServicesSection";
import Footer from "components/footers/SimpleFiveColumn";
import CTA from "components/cta/DurgeshGetStarted";
import Benefits from "components/durgesh/RoundedSquare";
import SimpleWithSideImage from "components/faqs/SimpleWithSideImage";
import BenefitsWithMockup from "components/durgesh/BenefitsWithMockup";

//images

import ProductImageRasikLoyalty from "images/ProductRasikLoyalty.png";
import ProfileImageRasikLoyalty from "images/Loyalty.png";

import DurgeshStatTCCSPB from "components/features/DurgeshStatTCCSPB";
import DurgeshTeams from "components/cards/DurgeshTeams";
import Slider from "react-slick";
import { CardSlider, Container } from "components/misc/Layouts";
import DurgeshSimpleWithSideImage from "components/faqs/DurgeshSimpleWithSideImage";
import ServiceSection from "components/durgesh/Theme/ServiceSection";
import OneAppPoster from "components/durgesh/ProductPosterFromFigma";
import GridWithFeaturedPost from "components/blogs/GridWithFeaturedPost";
import RasikAppPoster from "components/durgesh/ProductPosterFromFigma";
import { useRef } from "react";
import AnimatedComponents from "components/durgesh/CustomStyle/AnimatedComponents";
import WhoWeAre from "components/durgesh/WhoWeAre";
import RewardSection from "components/durgesh/RewardSection";
import OurStory from "components/durgesh/OurStory";
import ProductPoster from "components/durgesh/ProductPoster";
import DynamicServices from "components/DynamicComponents/DynamicServices";
export default () => {
  const components = [
    {
      name: WhoWeAre,
    },
    {
      name: ServicesSection,
    },
    {
      name: OurStory,
    },
    {
      name: OneAppPoster,
    },
  ];

  const { type, subtype, name } = useParams();
  var Durgesh;
  console.log(type, "type");
  console.log(subtype, "subtype");
  console.log(name);

  try {
    return (
      <AnimationRevealPage>
        <Hero />
        {components.map((components, index) => {
          Durgesh = components.name;
          return <Durgesh />;
        })}
        <Footer />
      </AnimationRevealPage>
    );
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
};
