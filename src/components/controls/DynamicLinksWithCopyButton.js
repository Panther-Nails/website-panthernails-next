import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HighlightedHeading } from "components/misc/Headings.js";
import { ExecuteQuery } from "services/APIService";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`bg-white text-black p-12 text-left `}
`;

const PlansContainer = styled.table`
  ${tw`w-full mt-[16px] `}
  border-collapse: collapse;
  margin-top: 100px;
`;

const Plan = styled.tr`
  border-bottom: 1px solid #dddddd;
  .tableHeading {
    font-weight: 700;
    font-size: 1rem;
    line-height: 2rem;
  }
`;

const PlanCell = styled.td`
  ${tw`p-[5px] pr-[0px] text-left `}
  font-family: Arial, sans-serif;
`;

const CopyButton = styled.button`
  padding: 6px 10px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
`;

export default ({ properties, children, index, data }) => {
  const [siteMapData, setSiteMapData] = useState([]);

  useEffect(() => {
    var parameter = {
      WhereClause: "And isnull(Deleted,0) = 0",
    };

    ExecuteQuery({
      ActionName: "WSM.GMst_SelectAllFromLinkWhereCustom",
      ParameterJSON: JSON.stringify(parameter),
    }).then((response) => {
      console.log("sitemap from DynamicLinksWithCopyButton", response.items);
      setSiteMapData(response.items);
    });
  }, []);

  const copyToClipboard = (value) => {
    navigator.clipboard.writeText(value);
    alert(`${value} is copied`);
  };

  console.log(dynamicLinksHeadings);
  var dynamicLinksHeadings = [
    "Link Name",
    "GroupName",
    "SubGroupName",
    "PageName",
    "Copy URL",
  ];

  return (
    <></>
    // <Container tw="gap-8">
    //   <HighlightedHeading>{properties.heading}</HighlightedHeading>
    //   <PlansContainer>
    //     <thead>
    //       <Plan>
    //         {dynamicLinksHeadings.map((link, index) => (
    //           <th className="tableHeading" key={index}>
    //             {link}
    //           </th>
    //         ))}
    //       </Plan>
    //     </thead>
    //     <tbody>
    //       {siteMapData.map((link, index) => (
    //         <Plan key={index}>
    //           {/* <PlanCell>{link.LinkURL}</PlanCell> */}
    //           <PlanCell>{link.LinkName}</PlanCell>
    //           <PlanCell>{link.GroupName}</PlanCell>
    //           <PlanCell>{link.SubGroupName}</PlanCell>
    //           <PlanCell>{link.PageName}</PlanCell>

    //           <PlanCell>
    //             <CopyButton onClick={() => copyToClipboard(link.LinkURL)}>
    //               Copy
    //             </CopyButton>
    //           </PlanCell>
    //         </Plan>
    //       ))}
    //     </tbody>
    //   </PlansContainer>
    // </Container>
  );
};
