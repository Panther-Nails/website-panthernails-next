import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative px-4 bg-sitecolor-100`;
const Content = tw.div`max-w-screen-xl mx-auto py-0 lg:py-20`;  //chenge py-16 to py-0 26-2-24

const TwoColumn = tw.div`flex  `;
const Column1 = tw.div`  `;
const Column = tw.div` `;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain  bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`shadow` : tw`shadow-none`,
  tw`hidden lg:block rounded mt-32 h-8/12 bg-center `
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left text-sitecolor-900`;
const Heading = tw(SectionHeading)`lg:text-left text-center text-sitecolor-300`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold text-sitecolor-900`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-sitecolor-200 text-gray-100 p-1 rounded-full group-hover:bg-sitecolor-900 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "Product Features",
  heading = "Rasik Loyalty",//chenges in headings Questions to product Name
  description = "we have bunch of features that help you to establish the pure relation with influencers and you can connect anytime with influencers using rasik loyalty app features. ",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  
  const defaultFaqs = [
    {
      question: "Loayalty On Scan",
      answer:
        "The loyalty points are rewarded on scanning the unique QR associated with coupon codes.",
        url:'https://images.pexels.com/photos/20330740/pexels-photo-20330740/free-photo-of-a-dog-with-light-brown-fur-sitting-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Loyalty On Bill Amount",
      answer:"The Loyalty points are rewarded on the sale amount to the distributors, retailers, wholesalers, dealers & influencers.",
      url:'https://images.pexels.com/photos/12672768/pexels-photo-12672768.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Loyalty On Bill Quantity",
      answer:
        "The Loyalty points are rewarded on the sale quantity to the distributors, retailers, wholesalers, dealers & influencers",
        url:'https://images.pexels.com/photos/18624829/pexels-photo-18624829/free-photo-of-a-tree-on-a-meadow-in-the-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      question: "Onboarding",
      answer:
        "Hassle free sign up. With minimal details sign up is completed & all other information can be filled when needed.",
        url:'https://images.pexels.com/photos/15306706/pexels-photo-15306706/free-photo-of-rocks-on-hill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Multiple Redemption Options",
      answer:
        "Get Discount On Next Purchase,IMPS Bank Transfer, E-Vouchers / Brand Vouchers ,UPI Transfer, Electronic Goods, Trips",
        url:'https://images.pexels.com/photos/20272801/pexels-photo-20272801/free-photo-of-joshua-tree-national-park-engagement-session.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Engagement Options",
      answer:
        " Events & Meetups, Product Training Videos, Surveys, Certification, Product Catalogue",
        url:'https://images.pexels.com/photos/20326814/pexels-photo-20326814/free-photo-of-a-view-of-a-city-from-above-with-tall-buildings.png?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Gamification",
      answer:
        " Annual Targets, Run the Streak, Surprise Earning, BONUS POINTS, Scratch & Win, Refer & Earn, Monthly Target",
        url:'https://images.pexels.com/photos/1293260/pexels-photo-1293260.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      question: "Empowering Workforce",
      answer:
        " New Customer Analysis, Host Events & Analyze Survey Report, Search,Dealer Stock & Sale, Target Tracking",
        url:'https://images.pexels.com/photos/20141313/pexels-photo-20141313/free-photo-of-stirling-castle.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Tranceability & Identification",
      answer:
        " Product Genuinity Check, Cross Market Sale Tracking",
        url:'https://images.pexels.com/photos/18627571/pexels-photo-18627571/free-photo-of-mirror-among-plants.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      question: "Empowering Administration",
      answer:
        "Reports & Dashboards, Excel Add-ins, Region-wise Top Trending Products & Customers,Points Distribution, Payout Details",
        url:'https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      question: "Social Link & Notifiction",
      answer:
        "Social Handler (Connected In-App),In-App Marketing & Promotional Videos, Notification (New Products, Schemes & Festive etc.)",
        url:'https://images.pexels.com/photos/2088172/pexels-photo-2088172.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    
  ];

  if (!faqs || faqs.length === 0){
     faqs = defaultFaqs;
     
  }

  const [img, setimg] = useState(imageSrc);
  
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  
  

  const toggleQuestion = questionIndex => {
    
    if (activeQuestionIndex === questionIndex){
       setActiveQuestionIndex(null);
       setimg(imageSrc);
       
      }
    else{
       setActiveQuestionIndex(questionIndex);
       setimg(defaultFaqs[questionIndex].url);
       
      }

    
  };

  return (
    <Container id="faq">
      <Content>
        <TwoColumn>
          <Column1 tw="hidden lg:block w-5/12  flex-shrink-0 md:(h-screen ) bg-sitecolor-100  sticky top-0 flex flex items-center justify-center">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={img} />
          </Column1>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
