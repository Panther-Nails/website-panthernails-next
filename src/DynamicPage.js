import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Suspense } from "react";
import { ExecuteQuery } from "services/APIService";
import { lazy } from "react";
import GetStarted from "components/cta/GetStarted";

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

  useEffect(() => {
    ExecuteQuery({
      ActionName:
        "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
      ParameterJSON: JSON.stringify(parameter),
      SessionDataJSON: '{"CompanyID":217}',
    }).then((response) => {
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
    // ComponentOrder	ComponentName	ComponentPropertyJSON	ChildComponentJSON

    return (
      <>
        <AnimationRevealPage>
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
