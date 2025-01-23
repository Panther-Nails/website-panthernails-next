import { PrimaryButton } from "components/misc/Buttons";
import React, { useEffect, useState } from "react";
import { BS64PNE36 } from "services/cipher/BS64PNE36";

export default function Demo() {
  const [data, setData] = useState([]);

  const onCheckClick = (e) => {
    var bs = new BS64PNE36();

    let parameters = {
      OperationName: "Query",
      ActionName: "Core.GMst_SelectFewFromDoneeEventForActiveDoneeEvent",
      ParameterJSON: "",
      SessionDataJSON: '{ "CompanyID": "102" }',
    };

    let parameterJson = JSON.stringify(parameters);

    var safeParameters = bs.encrypt(parameterJson);

    // console.log("safeParameters", safeParameters);

    let resultJson = bs.decrypt(safeParameters);
    // console.log("resultJson", resultJson);

    let result = JSON.parse(resultJson);

    // console.log("result", result);

    try {
      let response = fetch("https://localhost:7106/api/Device/safeexecute", {
        method: "POST",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBcHBWZXJzaW9uIjoiMS4wLjAiLCJEYXRhQWNjZXNzS2V5SUQiOiIxMDAxIiwiZXhwIjoxNzI3MTg1NDUzLCJpc3MiOiJodHRwczpcXGFwaS5wYW50aGVybmFpbHMuY29tIiwiYXVkIjoiaHR0cHM6XFxvbmVhcHAucGFudGhlcm5haWxzLmNvbSJ9.mBXfyjxGCZSXcPHAsiJV_DeUAXWSQCam6nHMAAFeJp0",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
        body: safeParameters,
      })
        .then((response) => {
          if (!response.ok) {
            return {
              DataIsLoaded: false,
              items: [],
              message: response.Message || "Data retrival failed.",
            };
          }

          let text = response.text().then((t) => t);
          // console.log("1 text", text);
          return text;
        })
        .then((text) => {
          // Do something with the text data
          // console.log("2 test", text);
          var json = bs.decrypt(text);
          return json;
        })
        .then((res) => JSON.parse(res))
        .then((json) => {
          // console.log("3 json", json);
          return {
            DataIsLoaded: true,
            items: json.Data,
            message: json.Message,
          };
        })
        .catch((error) => {
          // Handle errors
          console.error("Fetch error:", error);
          return {
            DataIsLoaded: false,
            items: [],
            message: error.Message || "Data retrival failed.",
          };
        });

      response.then((res) => {
        console.log("4 response", res);
        setData(res.items);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div tw="m-10">
        <PrimaryButton onClick={onCheckClick}>Check</PrimaryButton>
      </div>

      <div tw="text-black">
        {data &&
          data.map((d) => {
            return <p>{JSON.stringify(d)}</p>;
          })}
      </div>
    </div>
  );
}
