import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { HighlightedHeading } from "components/misc/Headings.js";
import { useEffect } from "react";
import { ExecuteQuery } from "services/APIService";
import { useSession } from "providers/SessionProvider";

const Container = styled.div`bg-primary-900 text-gray-100 -mx-8 px-8 text-left`;
const PlansContainer = styled.div`
  ${tw`flex flex-wrap justify-between lg:justify-start lg:items-start`}
`;
const Plan = styled.div`
  ${tw` max-w-sm bg-white rounded-lg  px-6 sm:px-10 lg:px-6 mx-3 flex flex-col text-left`}
`;

const PlanFeatures = styled.ul`
  ${tw` flex-1  lg:-mx-6 -mx-6 sm:-mx-10  px-6 sm:px-10 lg:p-6 xl:-mx-10 xl:p-10`}
  .feature {
    ${tw`flex items-start mt-6 first:mt-0 hover:underline `}
    .icon {
      ${tw`w-6 h-6 text-primary-500 flex-shrink-0`}
    }
    .text {
      ${tw`font-semibold text-[#0067b8] tracking-wide`}
    }
  }
`;

export default ({ plans = null, properties, children, index }) => {
  const [siteMapData, setSiteMapData] = useState([]);

  //   var linkMaster = [];
  useEffect(() => {
    var parameter = {
      WhereClause: "",
    };

    ExecuteQuery({
      ActionName: "WSM.GMst_SelectAllFromLinkWhereCustom",
      ParameterJSON: JSON.stringify(parameter),
    }).then((response) => {
      setSiteMapData(response.items);
      console.log("siteMapData", response.items);
    });
  }, []);

  var siteMapArray = [
    {
      module: "Personal",
      name: "Shop",
      link: "https://panthernails.com/",
    },
    {
      module: "Personal",
      name: "Store for Business",
      link: "https://panthernails.com/",
    },
    {
      module: "Personal",
      name: "Store locations",
      link: "https://panthernails.com/",
    },
    {
      module: "Personal",
      name: "Developer",
      link: "https://panthernails.com/",
    },
    {
      name: "Gift cards",
      link: "https://panthernails.com/",
    },
    {
      module: "Loyalty",
      name: "2 Core Xeon CPU",
      link: "https://panthernails.com/",
    },
    {
      module: "Loyalty",
      name: "4 Core Xeon CPU",
      link: "https://panthernails.com/",
    },
    {
      module: "Loyalty",
      name: "99.9% Uptime",
      link: "https://panthernails.com/",
    },
    {
      module: "Loyalty",
      name: "Unlimited Transfer",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "Free DNS Management",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "2 Core Xeon CPU",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "4 Core Xeon CPU",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "99.9% Uptime",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "Unlimited Transfer",
      link: "https://panthernails.com/",
    },
    {
      module: "HRM",
      name: "Free DNS Management",
      link: "https://panthernails.com/",
    },
  ];

  const groupedByModule = siteMapData.reduce((acc, item) => {
    const module = item.module || "Others";
    if (!acc[module]) {
      acc[module] = { name: module, features: [] };
    }
    acc[module].features.push({
      name: item.HeadTitle,
      link: item.LinkURL,
    });
    return acc;
  }, []);
  const groupedArray = Object.values(groupedByModule);

  return (
    <Container tw="bg-white flex flex-col gap-8 py-12">
      <HighlightedHeading tw="text-left text-black text-3xl font-serif pl-8 py-12">
        Dynamic SiteMap
      </HighlightedHeading>
      <PlansContainer tw="md:flex justify-center gap-12">
        {groupedArray.map((plan, index) => (
          <Plan key={index} featured={plan.featured}>
            <PlanFeatures>
              <span className="nameAndFeaturedContainer">
                <span tw="lg:text-xl xl:text-xl font-bold uppercase tracking-wider text-black">
                  {plan.name}
                </span>
              </span>
              {plan.features.map((feature, index) => (
                <li className="feature" key={index}>
                  <a
                    href={feature.link}
                    className="text"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {feature.name}
                  </a>
                </li>
              ))}
            </PlanFeatures>
          </Plan>
        ))}
      </PlansContainer>
    </Container>
  );
};
