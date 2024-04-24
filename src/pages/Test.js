import React, { useEffect, useState, lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { ExecuteQuery } from "services/APIService";
import GetStarted from "components/cta/GetStarted";

export default ({}) => {
  const { type, subtype, name } = useParams();
  const [data, setData] = useState([]);

  const DynamicComponent = (Section, ComponentName) => {
    const ComponentTest = lazy(() =>
      import(`components/${Section}/${ComponentName}.js`)
        .then((module) => ({ default: module.default }))
        .catch((error) => {
          console.error(`Error loading component ${ComponentName}:`, error);
          return { default: () => <GetStarted /> };
        })
    );
    return ComponentTest;
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
        {data.map((component) => {
          console.log("component.Section", component.Section);
          console.log("component.ComponentName", component.ComponentName);
          const Component = DynamicComponent(
            component.Section,
            component.ComponentName
          );
          return (
            <Suspense>
              <Component data={component.CPJSON} />
            </Suspense>
          );
        })}
      </>
    );
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
};
