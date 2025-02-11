import FallbackLoading from "helpers/FallbackLoading";
import React, { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import { useExecuteQuerySWR } from "services/useExecuteQuerySWR";

const ImportDynamicComponent = (Section, ComponentName) => {
  const DynamicComponent = lazy(() =>
    import(`../components/${Section}/${ComponentName}.js`)
      .then((module) => ({ default: module.default }))
      .catch((error) => {
        return { default: () => <h2>Page Not Found</h2> }; // to be replaced with ErrorPage
      })
  );

  return DynamicComponent;
};

const DynamicComponent = ({ component, index, cacheKey }) => {
  const { data } = useExecuteQuerySWR(
    `${component.LinkComponentHierarchyID}-${cacheKey}`,
    {
      ActionName:
        "WSM.GMst_SelectFewFromComponentHierarchyPropertyWhereLinkComponentHierarchyID",
      ParameterJSON: JSON.stringify({
        LinkComponentHierarchyID: component.LinkComponentHierarchyID,
      }),
    }
  );
  const [properties, setProperties] = useState({});

  useEffect(() => {
    if (data) {
      if (data.message === "Successfull" && data.items.length > 0) {
        setProperties(JSON.parse(data.items[0]?.Properties));
      }
    }
  }, [data]);

  const ImportedComponent = ImportDynamicComponent(
    component.Section,
    component.ComponentName
  );

  const children = component.Children ? component.Children : [];

  return (
    <>
      {properties && Object.keys(properties).length > 0 && (
        <Suspense fallback={<FallbackLoading />}>
          {ImportedComponent && (
            <ImportedComponent
              data={component}
              children={children}
              properties={properties}
              key={index}
            />
          )}
        </Suspense>
      )}
    </>
  );
};

export default DynamicComponent;
