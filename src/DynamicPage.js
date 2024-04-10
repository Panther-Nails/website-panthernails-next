import React from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/DurgeshHero";
import ServicesSection from "components/durgesh/ServicesSection";
import Footer from "components/footers/SimpleFiveColumn";

import OneAppPoster from "components/durgesh/ProductPosterFromFigma";
import WhoWeAre from "components/durgesh/WhoWeAre";
import OurStory from "components/durgesh/OurStory";
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
