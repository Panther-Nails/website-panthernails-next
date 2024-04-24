import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";
import CookieConsent from "components/controls/CookieConsent";

export default () => {
  const { type, subtype, name } = useParams();

  const [data, setData] = useState([]);

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
        setData(response.items);
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

  try {
    var parameter = {
      GroupName: type,
      SubGroupName: subtype,
      PageName: name,
    };

    console.log("parameter", parameter);
    console.log("Response", data);

    return (
      <>
        <AnimationRevealPage>
          <CookieConsent />
          {data.map((component) => {
            console.log("component.Section", component.Section);
            console.log("component.ComponentName", component.ComponentName);
            const Component = ImportDynamicComponent(
              component.Section,
              component.ComponentName
            );
            return (
              <Suspense>
                <Component data={component.CPJSON} />
              </Suspense>
            );
          })}
        </AnimationRevealPage>
      </>
    );
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
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
