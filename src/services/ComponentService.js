import React, { useEffect, useState, lazy, Suspense } from "react";
import GetStarted from "components/cta/GetStarted";

export const getProperties = (component) => {
  var properties = {};
  var cpjson = {};
  var hpjson = {};

  if (component.CPJSON) cpjson = JSON.parse(component.CPJSON);

  if (component.HPJSON) hpjson = JSON.parse(component.HPJSON);

  properties = { ...cpjson, ...hpjson };
  return properties;
};

export const ImportDynamicComponent = (Section, ComponentName) => {
  const Component = lazy(() =>
    import(`components/${Section}/${ComponentName}.js`)
      .then((module) => ({ default: module.default }))
      .catch((error) => {
        console.log("error in compo");
        window.location.reload();
        console.error(`Error loading component ${ComponentName}:`, error);
        return { default: () => <GetStarted /> }; // to be replaced with ErrorPage
      })
  );

  return Component;
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
        <Suspense key={index}>
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
