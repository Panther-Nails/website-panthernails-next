import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";
import CookieConsent from "components/controls/CookieConsent";
import SiteMap from "components/headers/SiteMap";

export default () => {
  const { type, subtype, name } = useParams();

  const [data, setData] = useState({});
  const [components, setComponents] = useState([]);

  const ImportDynamicComponent = (Section, ComponentName) => {
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
        setData(response.items[0]);
      } else {
        setData([
          {
            Section: "cta",
            ComponentName: "GetStarted", // add page not available component
          },
        ]);
      }
    });
  }, []);

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
            <SiteMap />
            {components.map((component, index) => {
              const Component = ImportDynamicComponent(
                component.Section,
                component.ComponentName
              );
              var cpJson = "{}";
              var hpJson = "{}";

              if (component.CPJSON) {
                var cpJson = JSON.parse(component.CPJSON);
              }

              if (component.HPJSON) {
                var hpJson = JSON.parse(component.HPJSON);
              }

              return (
                <Component data={component} CPJSON={cpJson} HPJSON={hpJson} />
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
