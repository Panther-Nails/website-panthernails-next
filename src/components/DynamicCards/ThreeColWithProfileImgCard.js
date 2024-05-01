
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line


const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;



export default ({ children }) => {
 
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
      <Testimonials>
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
          {children.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <CustomerName>{testimonial.customerName}</CustomerName>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </>
          );
        })}
      </Testimonials>
    );
  };
  