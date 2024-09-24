import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";
import CookieConsent from "components/controls/CookieConsent";
import { getProperties } from "services/JsonService";
import { useSession } from "providers/SessionProvider";
import FallbackLoading from "helpers/FallbackLoading";

export const ImportDynamicComponent = (Section, ComponentName) => {
  const Component = lazy(() =>
    import(`components/${Section}/${ComponentName}.js`)
      .then((module) => ({ default: module.default }))
      .catch((error) => {
        console.error(`Error loading component ${ComponentName}:`, error);
        return { default: () => <GetStarted /> }; // to be replaced with ErrorPage
      })
  );
  return Component;
};

export const getChildComponentName = (Components) => {
  var childComponentName = Components[0].ComponentName;
  var childSection = Components[0].Section;
  var isUnique = true;

  Components.forEach((child) => {
    if (childComponentName !== child.ComponentName) isUnique = false;
    else childComponentName = child.ComponentName;
  });

  if (isUnique)
    return {
      componentName: childComponentName,
      section: childSection,
    };
  else return null;
};

export const ProcessChildComponents = (Components) => {
  if (Components.length > 0) {
    const component = getChildComponentName(Components);
    const Component = ImportDynamicComponent(
      component.section,
      component.componentName
    );
    var properties = getProperties(Components[0]);
    return (
      <Suspense>
        <Component children={Components} properties={properties} />
      </Suspense>
    );
  } else {
    return <></>;
  }
};

export const ProcessChildComponentsSeparately = (Components) => {
  if (Components.length > 0) {
    return Components.map((child, index) => {
      var childProperties = getProperties(child);
      const Component = ImportDynamicComponent(
        child.Section,
        child.ComponentName
      );
      return (
        <Suspense>
          <Component
            properties={childProperties}
            children={child.Children ?? []}
            index={index}
          />
        </Suspense>
      );
    });
  } else {
    return <></>;
  }
};

export default () => {
  const { type, subtype, name } = useParams();
  const { languageObject, setNotification } = useSession();
  const [data, setData] = useState({});
  const [components, setComponents] = useState([]);

  function setMetaTitleDynamic(response) {
    document.title =
      response.items[0].HeadTitle +
      " - Panther Nails Technologies Private Limited.";
    var existingMetaTagDescription = document.querySelector(
      'meta[name="description"]'
    );
    existingMetaTagDescription.setAttribute(
      "Content",
      response.items[0].HeadDescription
    );
    var existingMetaTagKeyWord = document.querySelector(
      'meta[name="keywords"]'
    );
    existingMetaTagKeyWord.setAttribute(
      "Content",
      response.items[0].HeadKeyWords
    );
  }

  const getPageCacheKey = () =>
    "1BGeZoi3zs" + window.location.pathname.replace("/", "-");

  // console.log(getPageCacheKey());

  useEffect(() => {
    ExecuteQuery(
      {
        ActionName:
          "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
        ParameterJSON: JSON.stringify(parameter),
        SessionDataJSON: { language: languageObject.code },
      },
      getPageCacheKey()
    ).then((response) => {
      if (response.message === "Successfull") {
        setMetaTitleDynamic(response);
        // console.log("Data retrival success");
        var newData = response.items[0];
        setData({ ...data, ...newData });
      } else {
        setNotification(
          "Please check your internet connection and try again",
          "info"
        );
        setData({
          HeadTitle: "Home",
          HeadDescription: "home description\r\n",
          HeadKeyWords: "Home, Panther Nails, Techologies, ",
          Components:
            '[{"ComponentOrder":1,"ComponentName":"TwoColumnWithVideo","Section":"hero","CPJSON":"{\\"buttonText\\":\\"Get Started\\",\\"buttonUrl\\":\\"#\\",\\"description\\":\\"Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.\\",\\"heading\\":\\"Modern React Templates, Just For You\\",\\"videoId\\":\\"wCg-xTWza7M\\",\\"watchVideoButtonText\\":\\"Watch Video\\",\\"watchVideoYoutubeUrl\\":\\"https:\\\\\\/\\\\\\/www.youtube.com\\\\\\/embed\\\\\\/_GuOjXYl5ew\\"}","HPJSON":"{\\"buttonText\\":\\"BOOK A MEETING\\",\\"buttonUrl\\":\\"https:\\\\\\/\\\\\\/calendly.com\\\\\\/panthernails\\\\\\/influencer-engagement-platform-demo\\",\\"description\\":\\"Experience our specialized \'Influencer Engagement Platform\' to have maximum reach to your prone customers with your sales and marketing division.\\",\\"heading\\":\\"Astute Solutions\\\\r\\\\nfor Your Business!\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/img.freepik.com\\\\\\/free-vector\\\\\\/boss-standing-front-employee-who-working-worker-sharing-idea-with-chief-flat-vector-illustration-workplace-business-communication-concept-banner-website-design-landing-web-page_74855-21660.jpg?w=740&t=st=1716266466~exp=1716267066~hmac=2e33e15f5222e279439202fe515e6fca96162e1c6b21aff21c2d8623964b9e90\\",\\"notification\\":\\"Experience our specialized \'Influencer Engagement Platform\' to have maximum reach to your prone customers with your sales and marketing division.\\",\\"subHeading\\":\\"https:\\\\\\/\\\\\\/oneapp.panthernails.com\\\\\\/FS\\\\\\/WSM\\\\\\/WebsiteAsset\\\\\\/217\\\\\\\\103.png\\"}"},{"ComponentOrder":2,"ComponentName":"SingleColImage","Section":"features","CPJSON":"{\\"description\\":\\"Description is here\\",\\"desktopImageSrc\\":\\"https:\\\\\\/\\\\\\/oneapp.panthernails.com\\\\\\/FS\\\\\\/WSM\\\\\\/WebsiteAsset\\\\\\/217\\\\\\/328.png\\",\\"heading\\":\\"Empower Your Future: Elevate with Innovative Cloud Solutions and Secure Data Access\\",\\"highlighHeading\\":\\"Professionals.\\",\\"mobileImageSrc\\":\\"https:\\\\\\/\\\\\\/oneapp.panthernails.com\\\\\\/FS\\\\\\/WSM\\\\\\/WebsiteAsset\\\\\\/217\\\\\\/326.png\\"}","HPJSON":"{\\"description\\":\\"\\",\\"heading\\":\\"Empower Your Future: Elevate with Innovative Cloud Solutions and Secure Data Access\\"}"},{"ComponentOrder":3,"ComponentName":"TwoColWithStat","Section":"features","CPJSON":"{\\"description\\":\\"We are a genial technology company delivering insightful enterprise software that foster your business.\\",\\"heading\\":\\"Heading for testing\\",\\"statistics\\":\\"[{\\\\\\"number\\\\\\":\\\\\\"15\\\\\\",\\\\\\"decorator\\\\\\":\\\\\\"+\\\\\\\\u25b2\\\\\\",\\\\\\"description\\\\\\":\\\\\\"Crores+ Payout\\\\\\"},{\\\\\\"number\\\\\\":\\\\\\"2\\\\\\",\\\\\\"decorator\\\\\\":\\\\\\"+\\\\\\\\u25b2\\\\\\",\\\\\\"description\\\\\\":\\\\\\"Crores+ Transaction\\\\\\"},{\\\\\\"number\\\\\\":\\\\\\"20\\\\\\",\\\\\\"decorator\\\\\\":\\\\\\"x\\\\\\\\u25b2\\\\\\",\\\\\\"description\\\\\\":\\\\\\"Retention Rate\\\\\\"},{\\\\\\"number\\\\\\":\\\\\\"25\\\\\\",\\\\\\"decorator\\\\\\":\\\\\\"+\\\\\\\\u25b2\\\\\\",\\\\\\"description\\\\\\":\\\\\\"Growth Rate Yoy\\\\\\"}]\\",\\"subHeading\\":\\"Our Expertise\\"}","HPJSON":"{\\"heading\\":\\"Engage, Connect, Thrive: Interact with Us for Unparalleled Solutions!\\"}"},{"ComponentOrder":4,"ComponentName":"DashedBorderSixFeatures","Section":"features","CPJSON":"{\\"heading\\":\\"Technology Innovations That Transform\\",\\"highlighHeading\\":\\"Your Business.\\"}","Children":[{"ComponentOrder":1,"ComponentName":"DashedBorderFeatureCard","Section":"DynamicCards","CPJSON":"{\\"description\\":\\"Description of the DashedBorderFeatureCard\\",\\"heading\\":\\"heading\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.pexels.com\\\\\\/photos\\\\\\/12842331\\\\\\/pexels-photo-12842331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load\\"}","HPJSON":"{\\"description\\":\\"Streamline your HR processes with our comprehensive suite of tools, including employee expense management, visitor management, payroll, and more.\\\\r\\\\n\\\\r\\\\n\\",\\"heading\\":\\"Human Resource Management\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/cdn-icons-png.flaticon.com\\\\\\/128\\\\\\/10691\\\\\\/10691841.png\\"}"},{"ComponentOrder":2,"ComponentName":"DashedBorderFeatureCard","Section":"DynamicCards","CPJSON":"{\\"description\\":\\"Description of the DashedBorderFeatureCard\\",\\"heading\\":\\"heading\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.pexels.com\\\\\\/photos\\\\\\/12842331\\\\\\/pexels-photo-12842331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load\\"}","HPJSON":"{\\"description\\":\\"Enhance customer loyalty and drive sales with our online order tracking system and incentive-based loyalty programs.\\\\r\\\\n\\\\r\\\\n\\\\r\\\\n\\",\\"heading\\":\\"Loyalty & Promotions\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/cdn-icons-png.flaticon.com\\\\\\/128\\\\\\/2331\\\\\\/2331896.png\\"}"},{"ComponentOrder":3,"ComponentName":"DashedBorderFeatureCard","Section":"DynamicCards","CPJSON":"{\\"description\\":\\"Description of the DashedBorderFeatureCard\\",\\"heading\\":\\"heading\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.pexels.com\\\\\\/photos\\\\\\/12842331\\\\\\/pexels-photo-12842331.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load\\"}","HPJSON":"{\\"description\\":\\"Optimize your travel plans and expense tracking with our intuitive platform, covering everything from travel plans to approval matrices.\\\\r\\\\n\\\\r\\\\n\\",\\"heading\\":\\"Travelling & Expence Management\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/cdn-icons-png.flaticon.com\\\\\\/128\\\\\\/9150\\\\\\/9150529.png\\"}"}]},{"ComponentOrder":5,"ComponentName":"TwoColSingleFeatureWithStats2","Section":"features","CPJSON":"{\\"buttonText\\":\\"Learn More\\",\\"buttonUrl\\":\\"https:\\\\\\/\\\\\\/tools.knowledgewalls.com\\\\\\/online-multiline-to-single-line-converter\\",\\"description\\":\\"Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\\",\\"heading\\":\\"We have been doing this since\\",\\"highlighHeading\\":\\"1999\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.pexels.com\\\\\\/photos\\\\\\/4050312\\\\\\/pexels-photo-4050312.jpeg?auto=compress&cs=tinysrgb&w=600\\",\\"statistics\\":\\"[{\\\\\\"key\\\\\\":\\\\\\"Clients\\\\\\",\\\\\\"value\\\\\\":\\\\\\"2282+\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Projects\\\\\\",\\\\\\"value\\\\\\":\\\\\\"3891+\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Awards\\\\\\",\\\\\\"value\\\\\\":\\\\\\"1000+\\\\\\"}]\\",\\"textOnLeft\\":\\"false\\"}","HPJSON":"{\\"description\\":\\"Revealing Success: Unveiling Our Astounding Milestones\\",\\"heading\\":\\"Excellence in Numbers: Our \\",\\"highlighHeading\\":\\"Remarkable Achievements\\",\\"statistics\\":\\"[{\\\\\\"key\\\\\\":\\\\\\"Locations\\\\\\",\\\\\\"value\\\\\\":\\\\\\"4\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Customers\\\\\\",\\\\\\"value\\\\\\":\\\\\\"35+\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Hard Workers\\\\\\",\\\\\\"value\\\\\\":\\\\\\"50+\\\\\\"}]\\"}"},{"ComponentOrder":6,"ComponentName":"GetStarted","Section":"cta","CPJSON":"{\\"heading\\":\\"Your Products Earn You Money But Self Sufficient System Will Earn You fortune.\\",\\"leftButtonText\\":\\"Get Started\\",\\"leftButtonUrl\\":\\"https:\\\\\\/\\\\\\/calendly.com\\\\\\/panthernails\\\\\\/influencer-engagement-platform-demo?month=2024-04\\",\\"pushDownFooter\\":\\"false\\",\\"rightButtonText\\":\\"Contact Us\\",\\"rightButtonUrl\\":\\"https:\\\\\\/\\\\\\/calendly.com\\\\\\/panthernails\\\\\\/influencer-engagement-platform-demo?month=2024-04\\"}","HPJSON":"{\\"heading\\":\\"A genial technology company delivering Insightful Enterprise Software.\\"}"},{"ComponentOrder":6,"ComponentName":"TwoColumnWithImage","Section":"testimonials","CPJSON":"{\\"heading\\":\\"Our Awesome Customers\\"}","HPJSON":"{\\"heading\\":\\"Discover Our Premium Selection: Elevate Your Experience with Panther Nails\\"}","Children":[{"ComponentOrder":1,"ComponentName":"TwoColumnWithImageCard","Section":"DynamicCards","CPJSON":"{\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.unsplash.com\\\\\\/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80\\",\\"name\\":\\"Charlotte Hale\\",\\"quote\\":\\"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\\",\\"title\\":\\"CEO, Delos Inc.\\"}","HPJSON":"{\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/panthernails.com\\\\\\/img\\\\\\/HR.jpg\\",\\"name\\":\\"One App\\",\\"quote\\":\\"Transform HR with ease. Our suite streamlines processes, boosts productivity, and unlocks efficiency, all in one seamless solution.\\",\\"title\\":\\"By Panther Nails\\"}"},{"ComponentOrder":2,"ComponentName":"TwoColumnWithImageCard","Section":"DynamicCards","CPJSON":"{\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.unsplash.com\\\\\\/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80\\",\\"name\\":\\"Charlotte Hale\\",\\"quote\\":\\"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\\",\\"title\\":\\"CEO, Delos Inc.\\"}","HPJSON":"{\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/img.freepik.com\\\\\\/free-vector\\\\\\/engagement-marketing-abstract-concept-illustration-internet-marketing-engagement-management-active-participation-online-commerce-smm-strategy-interactive-content_335657-141.jpg?w=740&t=st=1716205595~exp=1716206195~hmac=15224aedfc42057a63e583b2d441a29ae401b06a640f9f626a005e8dd222d752\\",\\"name\\":\\"Rasik - Shop & Earn\\",\\"quote\\":\\"Drive sales, inspire loyalty. Our Loyalty & Promotions suite makes it easy to engage customers and boost revenue.\\",\\"title\\":\\"By Panther Nails\\"}"}]},{"ComponentOrder":7,"ComponentName":"TwoColSingleFeatureWithStats","Section":"features","CPJSON":"{\\"description\\":\\"We are a genial technology company delivering insightful enterprise software that foster your business. \\",\\"heading\\":\\"Transform Your Business\\",\\"imageSrc\\":\\"https:\\\\\\/\\\\\\/images.unsplash.com\\\\\\/photo-1582564286939-400a311013a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80\\",\\"statistics\\":\\"[{\\\\\\"key\\\\\\":\\\\\\"Countries\\\\\\",\\\\\\"value\\\\\\":\\\\\\"192\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Hotels\\\\\\",\\\\\\"value\\\\\\":\\\\\\"479\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Rooms\\\\\\",\\\\\\"value\\\\\\":\\\\\\"2093\\\\\\"},{\\\\\\"key\\\\\\":\\\\\\"Workers\\\\\\",\\\\\\"value\\\\\\":\\\\\\"10347\\\\\\"}]\\",\\"textOnLeft\\":\\"false\\"}"},{"ComponentOrder":12,"ComponentName":"FiveColumnWithInputForm","Section":"footers","CPJSON":"{\\"inputs\\":\\"[{\\\\\\"title\\\\\\":\\\\\\"Site links\\\\\\",\\\\\\"menuLinks\\\\\\":[{\\\\\\"title\\\\\\":\\\\\\"Blog\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"About Us\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/about\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"FAQs\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/contact\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Support\\\\\\",\\\\\\"link\\\\\\":\\\\\\"mailto:support@oneapp.panthernails.com?subject=Customer Support - Website Visitor&body=I want more details about your products. My email address is:\\\\\\"}]},{\\\\\\"title\\\\\\":\\\\\\"Loyalty Platform\\\\\\",\\\\\\"menuLinks\\\\\\":[{\\\\\\"title\\\\\\":\\\\\\"Customer Loyalty Platform\\\\\\",\\\\\\"link\\\\\\":\\\\\\"#\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Influencer Loyalty Platform\\\\\\",\\\\\\"link\\\\\\":\\\\\\"#\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Channel Loyalty Platform\\\\\\",\\\\\\"link\\\\\\":\\\\\\"#\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"End to End Loyalty Platform\\\\\\",\\\\\\"link\\\\\\":\\\\\\"#\\\\\\"}]},{\\\\\\"title\\\\\\":\\\\\\"Products\\\\\\",\\\\\\"menuLinks\\\\\\":[{\\\\\\"title\\\\\\":\\\\\\"Contract Labour Management\\\\\\",\\\\\\"link\\\\\\":\\\\\\"pages\\\\\\\\\\\\\\/products\\\\\\\\\\\\\\/clm\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Production Management\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Human Resource Management\\\\\\",\\\\\\"link\\\\\\":\\\\\\"pages\\\\\\\\\\\\\\/products\\\\\\\\\\\\\\/clm\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Fixed Asset Management\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/\\\\\\"}]},{\\\\\\"title\\\\\\":\\\\\\"Legal\\\\\\",\\\\\\"menuLinks\\\\\\":[{\\\\\\"title\\\\\\":\\\\\\"Privacy Policy\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/PrivacyPolicy\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Terms Of Service\\\\\\",\\\\\\"link\\\\\\":\\\\\\"\\\\\\\\\\\\\\/TermsOfService\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Sub Processors\\\\\\",\\\\\\"link\\\\\\":\\\\\\"https:\\\\\\\\\\\\\\/\\\\\\\\\\\\\\/panthernails.com\\\\\\\\\\\\\\/docs\\\\\\\\\\\\\\/61.01_Panther_Nails_Cloud_Infrastructure_Integrations_And_Sub_Processors_R2202.pdf\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"Data Protection\\\\\\",\\\\\\"link\\\\\\":\\\\\\"https:\\\\\\\\\\\\\\/\\\\\\\\\\\\\\/panthernails.com\\\\\\\\\\\\\\/docs\\\\\\\\\\\\\\/61.02_Panther_Nails_Application_Data_Privacy_R2202.pdf\\\\\\"},{\\\\\\"title\\\\\\":\\\\\\"SLA\\\\\\",\\\\\\"link\\\\\\":\\\\\\"https:\\\\\\\\\\\\\\/\\\\\\\\\\\\\\/panthernails.com\\\\\\\\\\\\\\/docs\\\\\\\\\\\\\\/71.03_Panther_Nails_Service_Level_Agreement_R2202.pdf\\\\\\"}]}]\\"}"}]',
        });
      }
    });
  }, [type, subtype, name]);

  useEffect(() => {
    // console.log("dataset", data);
    // console.log("length", data.Components);
    if (data.Components) {
      var c = JSON.parse(data.Components);
      setComponents(c);
    }
  }, [data]);

  try {
    var parameter = {
      GroupName: type,
      SubGroupName: subtype,
      PageName: name,
    };

    return (
      <>
        <Suspense fallback={<FallbackLoading />}>
          <CookieConsent />
          {components.map((component, index) => {
            const Component = ImportDynamicComponent(
              component.Section,
              component.ComponentName
            );

            var children = [];
            if (component.Children) {
              children = component.Children;
            }
            var properties = getProperties(component);

            return (
              <Component
                data={component}
                children={children}
                properties={properties}
                key={index}
              />
            );
          })}
        </Suspense>
      </>
    );
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found [{e.message}] </div>;
  }
};

/*

Data : 
1 Home /
{
  Title
  Keyword
  description
  components: [
    {
      ComponentOrder
      Section
      ComponentName
      ComponentPropertyJSON
      ComponentHierarchyPropertyJson
    },
    {
      ComponentOrder
      Section
      ComponentName
      ComponentPropertyJSON
      ComponentHierarchyPropertyJson
    },
  ]
}

*/
