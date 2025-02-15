import React, { lazy, useEffect, useState } from "react";
import { Suspense } from "react";
import { useSWRConfig } from "swr";

import { useExecuteQuerySWR } from "services/useExecuteQuerySWR";
import FallbackLoading from "helpers/FallbackLoading";

const ImportDynamicComponent = (Section, ComponentName) => {
  const DynamicComponent = lazy(() =>
    import(`../components/${Section}/${ComponentName}.js`)
      .then((module) => ({ default: module.default }))
      .catch((error) => {
        console.log("Error while importing component", error);

        return { default: () => <FallbackLoading /> };
      })
  );

  return DynamicComponent;
};

const DynamicComponent = ({ component, index }) => {
  const appCache = useSWRConfig();
  const [properties, setProperties] = useState({});

  const { data } = useExecuteQuerySWR(`${component.CacheKey}`, {
    ActionName:
      "WSM.GMst_SelectFewFromComponentHierarchyPropertyWhereLinkComponentHierarchyID",
    ParameterJSON: JSON.stringify({
      LinkComponentHierarchyID: component.LinkComponentHierarchyID,
    }),
  });

  useEffect(() => {
    const currentCacheKeys = Array.from(appCache.cache.keys()) || [];
    const languageID = component?.CacheKey?.split("-")[1];

    if (currentCacheKeys.length > 0) {
      currentCacheKeys
        .filter((key) =>
          key.startsWith(`${component.LinkComponentHierarchyID}-${languageID}-`)
        )
        .forEach((key) => {
          if (component.CacheKey === key) {
            return;
          } else {
            appCache.cache.delete(key);
          }
        });
    }
  }, [component.LinkComponentHierarchyID]);

  useEffect(() => {
    if (data) {
      if (data.message === "Successfull" && data.items.length > 0) {
        const parseData = data?.items[0]?.Properties || "{}";
        setProperties(JSON.parse(parseData));
      }
    }
  }, [data]);

  const ImportedComponent = ImportDynamicComponent(
    component.Section,
    component.ComponentName
  );

  return (
    <>
      {properties && Object.keys(properties).length > 0 && (
        <Suspense fallback={<FallbackLoading />}>
          {ImportedComponent && (
            <ImportedComponent
              data={component}
              children={component.Children ? component.Children : []}
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
