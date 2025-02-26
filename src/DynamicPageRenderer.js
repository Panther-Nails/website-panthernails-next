import React, { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ExecuteQuery } from "services/APIService";
import { useSession } from "providers/SessionProvider";

const DynamicComponent = lazy(() => import("./providers/DynamicComponent"));
const FallbackLoading = lazy(() => import("./helpers/FallbackLoading"));

export default () => {
  const { type, subtype, name } = useParams();
  const [components, setComponents] = useState([]);
  const { languageObject } = useSession();

  const path = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    var parameter = {
      GroupName: type,
      SubGroupName: subtype,
      PageName: name,
    };

    ExecuteQuery({
      ActionName:
        "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
      ParameterJSON: JSON.stringify(parameter),
    }).then((data) => {
      if (data) {
        if (data.message === "Successfull" && data.items.length > 0) {
          const newData = data.items[0];

          if (newData.Components) {
            const componentsList = JSON.parse(newData.Components);

            setComponents(componentsList);
          }
        }
      }
    });
  }, [path, languageObject.LanguageID, type, subtype, name]);

  return (
    <>
      {components.length === 0 ? (
        <FallbackLoading />
      ) : (
        <>
          {components.map((component, index) => (
            <div id={component.CacheKey} key={index}>
              <DynamicComponent component={component} index={index} />
            </div>
          ))}
        </>
      )}
    </>
  );
};
