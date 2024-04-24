import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Suspense } from "react";

import { ExecuteQuery } from "services/APIService";
import { getComponentName } from "components/DynamicControls/ComponentsControls";
import { lazy } from "react";
import { components } from "ComponentRenderer";

export default () => {
  const { type, subtype, name } = useParams();

  const [data, setData] = useState([]);

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
    // ComponentOrder	ComponentName	ComponentPropertyJSON	ChildComponentJSON

    return (
      <>
        {data.map((component, index) => {
          // console.log("componentsData", component);
          var Component = getComponentName[component.ComponentName];
          // console.log("component Name", component.ComponentName);
          return Component && <Component data={component} />;
        })}
      </>
    );
  } catch (e) {
    console.log(e);
    return <div>Error: Component Not Found</div>;
  }
};
