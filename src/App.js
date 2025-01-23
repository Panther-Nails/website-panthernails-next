import React from "react";
import GlobalStyles from "styles/GlobalStyles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "components/headers/light";
import RouterPaths from "RouterPaths";
import ScrollUpButton from "components/features/ScrollUpButton";
import FiveColumnWithInputForm from "components/footers/FiveColumnWithInputForm";
import DockedButtons from "components/features/DockedButtons";

export default function App() {
  const headerLinks = [
    { url: "/about", text: "About Us" },
    { url: "/pages/products/loyalty", text: "Rasik Loyalty Platform" },
    { url: "/pages/products/clm", text: "Contract Labour Management" },
    //    { url: "/blog", text: "Blog" },
    { url: "/contact", text: "Contact Us" },
  ];

  let dockedButtonsProperties = {
    links:
      '[{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504903.png","link":"https://www.facebook.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/3991/3991775.png","link":"https://www.linkedin.com/company/panthernails/?viewAsMember=true"},{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504947.png","link":"https://x.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/2111/2111463.png","link":"https://www.instagram.com/pnbs_india/"},{"icon":"https://cdn-icons-png.flaticon.com/128/5968/5968852.png","link":"https://www.youtube.com/@panthernailsindia"},{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504957.png","link":"https://wa.me/918087144244"}]',
    position: "right",
  };

  let fiveColumnWithInputFormProperties = {
    inputs:
      '[{"title":"Site links","menuLinks":[{"title":"Blog","link":"/coming-soon"},{"title":"About Us","link":"/about"},{"title":"Contact Us","link":"/contact"},{"title":"Support","link":"mailto:support@oneapp.panthernails.com?subject=Customer Support - Website Visitor&body=I want more details about your products. My email address is:"}]},{"title":"Loyalty Platform","menuLinks":[{"title":"Customer Loyalty Platform","link":"/pages/products/loyalty"},{"title":"Influencer Loyalty Platform","link":"/pages/products/loyalty"},{"title":"Channel Loyalty Platform","link":"/pages/products/loyalty"},{"title":"Architect Loyalty","link":"/pages/products/loyalty"}]},{"title":"Products","menuLinks":[{"title":"Contract Labour Management","link":"/pages/products/clm"},{"title":"Production Management","link":"/coming-soon"},{"title":"Human Resource Management","link":"/pages/products/clm"},{"title":"Fixed Asset Management","link":"/coming-soon"}]},{"title":"Legal","menuLinks":[{"title":"Privacy Policy","link":"/privacyPolicy"},{"title":"Terms Of Service","link":"/termOfPolicy"},{"title":"Sub Processors","link":"https://panthernails.com/docs/61.01_Panther_Nails_Cloud_Infrastructure_Integrations_And_Sub_Processors_R2202.pdf"},{"title":"Data Protection","link":"https://panthernails.com/docs/61.02_Panther_Nails_Application_Data_Privacy_R2202.pdf"},{"title":"SLA","link":"https://panthernails.com/docs/71.03_Panther_Nails_Service_Level_Agreement_R2202.pdf"}]}]',
    socialLinks:
      '[{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504957.png","link":"https://wa.me/918087144244"},{"icon":"https://cdn-icons-png.flaticon.com/128/3991/3991775.png","link":"https://www.linkedin.com/company/panthernails/?viewAsMember=true"},{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504947.png","link":"https://x.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/2111/2111463.png","link":"https://www.instagram.com/pnbs_india/"},{"icon":"https://cdn-icons-png.flaticon.com/128/2504/2504903.png","link":"https://www.facebook.com/panthernails"},{"icon":"https://cdn-icons-png.flaticon.com/128/5968/5968852.png","link":"https://www.youtube.com/@panthernailsindia"}]',
  };

  return (
    <>
      <GlobalStyles />

      <Header links={headerLinks} />
      <ScrollUpButton />

      <RouterPaths />

      {/* <DockedButtons properties={dockedButtonsProperties} /> */}

      <FiveColumnWithInputForm properties={fiveColumnWithInputFormProperties} />
    </>
  );
}
