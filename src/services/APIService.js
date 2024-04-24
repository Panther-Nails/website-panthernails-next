export function Execute(oFormData) {
  return fetch("https://oneapp.panthernails.com/DPWA/api/device/Execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
    body: JSON.stringify(oFormData),
  })
    .then((res) => res.json())
    .then((json) => {
      return { DataIsLoaded: true, items: json.Data, message: json.Message };
    });
}

export function ExecuteCommand(FormData) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "Command";

  return Execute(oFormData);
}

export function ExecuteQuery(FormData) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "Query";

  return Execute(oFormData);
}

export function ExecuteFile(FormData) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "File";

  return Execute(oFormData);
}
