import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DynamicComponent from "providers/DynamicComponent";
import FallbackLoading from "helpers/FallbackLoading";
import { ExecuteQuery } from "services/APIService";
import { useSession } from "providers/SessionProvider";

//test
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components";

export default () => {
  const { type, subtype, name } = useParams();
  const [components, setComponents] = useState([]);
  const { languageObject } = useSession();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

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
  }, [window.location.pathname, languageObject.LanguageID]);

  return (
    <>
      {components.length === 0 ? (
        <FallbackLoading />
      ) : (
        <>
          {components.map((component, index) => (
            <>
              <DynamicComponent
                component={component}
                index={index}
                key={index}
              />
            </>
          ))}
        </>
      )}
    </>
  );
};
