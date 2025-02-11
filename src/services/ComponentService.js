import React, { lazy } from "react";
import PageNotFound from "helpers/PageNotFound";
import DynamicComponent from "providers/DynamicComponent";
import { useSession } from "providers/SessionProvider";

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
        return { default: () => <PageNotFound /> }; // to be replaced with ErrorPage
      })
  );

  return Component;
};

export const ProcessChildComponentsSeparately = (Components) => {
  const { languageObject } = useSession();
  if (Components.length > 0) {
    return Components.map((component, index) => {
      return (
        <DynamicComponent
          component={component}
          index={index}
          key={index}
          cacheKey={languageObject?.LanguageID}
        />
      );
    });
  } else {
    return <></>;
  }
};
