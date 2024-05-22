import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";
import CookieConsent from "components/controls/CookieConsent";
import { getProperties } from "services/JsonService";
import { useSession } from "providers/SessionProvider";
import FallbackLoading from "helpers/FallbackLoading";
import Fireworks from "components/controls/Fireworks";

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
  const { languageObject } = useSession();
  const [data, setData] = useState({});
  const [components, setComponents] = useState([]);

  function setMetaTitleDynamic(response) {
    document.title =
      response.items[0].HeadTitle +
      " - Panther Nails Technologies Private Limited.";
    console.log(response);
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
      console.log("Response", response);
      setMetaTitleDynamic(response);

      if (response.message === "Successfull") {
        // console.log("Data retrival success");
        var newData = response.items[0];
        setData({ ...data, ...newData });
      } else {
        setData({
          HeadTitle: "Home",
          HeadDescription: "",
          HeadKeyWords: "Home, panther, nails",
          Components:
            '[{"ComponentOrder":1,"ComponentName":"BackgroundAsImage","Section":"hero"},{"ComponentOrder":2,"ComponentName":"TwoColWithSteps","Section":"features"},{"ComponentOrder":3,"ComponentName":"TwoColumnWithImageAndProfilePictureReview","Section":"testimonials"},{"ComponentOrder":4,"ComponentName":"GetStarted","Section":"cta"},{"ComponentOrder":5,"ComponentName":"DashedBorderSixFeatures","Section":"features"},{"ComponentOrder":6,"ComponentName":"TwoColumnWithImage","Section":"testimonials"},{"ComponentOrder":7,"ComponentName":"TwoColSingleFeatureWithStats2","Section":"features"},{"ComponentOrder":8,"ComponentName":"FiveColumnDark","Section":"footers"}]',
        });
      }
    });
  }, [type, subtype, name]);

  useEffect(() => {
    // console.log("dataset", data);
    // console.log("length", data.Components);
    if (data.Components) {
      var c = JSON.parse(data.Components);
      console.log("components ", c);
      setComponents(c);
    }
  }, [data]);

  try {
    var parameter = {
      GroupName: type,
      SubGroupName: subtype,
      PageName: name,
    };
    // console.log("data check", data[0]);
    return (
      <>
        <Suspense fallback={<FallbackLoading />}>
          {/* <AnimationRevealPage> */}
          <CookieConsent />
          {components.map((component, index) => {
            const Component = ImportDynamicComponent(
              component.Section,
              component.ComponentName
            );
            {
              var children = [];
              if (component.Children) {
                children = component.Children;
              }
              var properties = getProperties(component);
            }
            return (
              <Component
                data={component}
                children={children}
                properties={properties}
              />
            );
          })}
          {/* </AnimationRevealPage> */}
        </Suspense>
        <Fireworks />
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
