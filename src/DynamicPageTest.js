import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSession } from "providers/SessionProvider";
import { useExecuteQuerySWR } from "./services/useExecuteQuerySWR";
import DynamicComponent from "providers/DynamicComponent";
import FallbackLoading from "helpers/FallbackLoading";

export default () => {
  const { type, subtype, name } = useParams();
  const { languageObject, setNotification } = useSession();
  const [pageData, setPageData] = useState({});
  const [components, setComponents] = useState([]);

  var parameter = {
    GroupName: type,
    SubGroupName: subtype,
    PageName: name,
  };

  const LanguageID = languageObject?.LanguageID;
  const cacheKey =
    `${window.location.pathname}-${LanguageID}` || `/-${LanguageID}`;

  const { data, error } = useExecuteQuerySWR(`${cacheKey}`, {
    ActionName:
      "WSM.GMst_SelectFewFromLinkComponentAndComponentPropertyWhereGroupNameSubGroupNamePageName",
    ParameterJSON: JSON.stringify(parameter),
  });

  useEffect(() => {
    if (data) {
      if (data.message === "Successfull" && data.items.length > 0) {
        if (data.items.length > 0) {
          const newData = data.items[0];
          setPageData(newData);
        }
      }
    }
  }, [data, error]);

  useEffect(() => {
    if (pageData.Components) {
      const componentsList = JSON.parse(pageData.Components);
      setComponents(componentsList);
    }
  }, [pageData]);

  return (
    <>
      {components.length === 0 ? (
        <FallbackLoading />
      ) : (
        <>
          {components.map((component, index) => (
            <DynamicComponent component={component} index={index} key={index} />
          ))}
        </>
      )}
    </>
  );
};
