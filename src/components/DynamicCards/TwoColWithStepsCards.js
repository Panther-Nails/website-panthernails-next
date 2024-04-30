import React from "react";
import { useEffect, useState } from "react";
import tw from "twin.macro";

const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-gray-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-600 font-medium`;


const Steps = tw.ul`mt-12`;
export default ({ children }) => {
    console.log("home2component",children);
 
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
      <Steps>
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
            <>
            <Step key={index}>
            <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
            <StepText>
              <StepHeading>{hpJson.heading}</StepHeading>
              <StepDescription>{hpJson.description}</StepDescription>
            </StepText>
          </Step>
          </>
          );
        })}
      </Steps>
      
    );
  };
  