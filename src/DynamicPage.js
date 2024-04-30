import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";
import CookieConsent from "components/controls/CookieConsent";

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
    return (
      <Suspense>
        <Component children={Components} />
      </Suspense>
    );
  } else {
    return <></>;
  }
};

export const ProcessComponents = (Components) => {
  Components.map((component, index) => {
    const Component = ImportDynamicComponent(
      component.Section,
      component.ComponentName
    );
    return (
      <Suspense>
        <Component data={component} />
      </Suspense>
    );
  });
};

export default () => {
  const { type, subtype, name } = useParams();

  const [data, setData] = useState({});
  const [components, setComponents] = useState([]);

  const getPageCacheKey = () =>
    "1BGeZoi3zs" + window.location.pathname.replace("/", "-");

  console.log(getPageCacheKey());

  useEffect(() => {
    ExecuteQuery(
      {
        ActionName:
          "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
        ParameterJSON: JSON.stringify(parameter),
      },
      getPageCacheKey()
    ).then((response) => {
      console.log("Response", response);
      if (response.message === "Successfull") {
        console.log("Data retrival success");
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
    console.log("dataset", data);
    console.log("length", data.Components);
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
        <Suspense>
          <AnimationRevealPage>
            <CookieConsent />
            {components.map((component, index) => {
              const Component = ImportDynamicComponent(
                component.Section,
                component.ComponentName
              );
              {
                var cpJson = {};
                var hpJson = {};
                var children = [];

                if (component.CPJSON) {
                  cpJson = JSON.parse(component.CPJSON);
                }

                if (component.HPJSON) {
                  hpJson = JSON.parse(component.HPJSON);
                }

                if (component.Children) {
                  children = component.Children;
                }
                var finalJson = { ...cpJson, ...hpJson };
              }

              return (
                <Component
                  data={component}
                  CPJSON={cpJson}
                  HPJSON={hpJson}
                  children={children}
                  finalJson={finalJson}
                />
              );
            })}
          </AnimationRevealPage>
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
