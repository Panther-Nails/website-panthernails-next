import { ClearCache, getCacheAsync, trySetCache } from "./CacheService";
import { CookieDuration, getCookie, setCookie } from "./CookieService";
import moment from "moment";
import { BS64PNE36Encryption } from "turbo/lib/cjs/Encryption/BS64PNE36Encryption";

// export function Execute(oFormData) {
//   var decryptionKey = decryptData(
//     "U2FsdGVkX1+W8KoKL4/oI5HlgnvejSahTXl44m6BXuV/TfvRV+NVLObS6Puiq/pu",
//     "abcd12345"
//   );

//   var session = decryptData(encrypted.session, decryptionKey);

//   var sessionData = {
//     CompanyID: session.CompanyID,
//     SubscriberID: session.SubscriberID,
//     AppID: session.AppID,
//     AppVersion: session.AppVersion,
//     AppPlatform: session.AppPlatform,
//   };

//   var formData = {
//     ...oFormData,
//     SessionDataJSON: JSON.stringify({
//       ...sessionData,
//       ...oFormData.SessionDataJSON,
//     }),
//   };

//   var bs = new BS64PNE36();
//   var body = JSON.stringify(formData);
//   var formDataEncrypted = bs.encrypt(body);

//   return GetAuthenticationToken(session.CompanyID).then((token) => {
//     return fetch(`${encrypted.baseUrl}/Device/safeexecute`, {
//       method: "POST",
//       headers: {
//         Authorization: token,
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Headers":
//           "Origin, X-Requested-With, Content-Type, Accept",
//       },
//       body: formDataEncrypted,
//     })
//       .then((response) => {
//         if (!response.ok) {
//           return bs.encrypt(
//             JSON.stringify({
//               DataIsLoaded: false,
//               items: [],
//               message: response.Message || "Data retrival failed.",
//             })
//           );
//         }

//         return response.text().then((t) => t);
//       })
//       .then((text) => bs.decrypt(text))
//       .then((res) => JSON.parse(res))
//       .then((json) => {
//         return {
//           DataIsLoaded: true,
//           items: json.Data,
//           message: json.Message,
//         };
//       })
//       .catch((error) => {
//         // Handle errors
//         console.error("Fetch error:", error);
//         return {
//           DataIsLoaded: false,
//           items: [],
//           message: error.Message || "Data retrival failed.",
//         };
//       });
//   });
// }

export function Execute(oFormData) {
  var languageID = JSON.parse(
    localStorage.getItem("languageObject")
  )?.LanguageID;

  var sessionData = {
    CompanyID: process.env.REACT_APP_COMPANY_ID,
    SubscriberID: process.env.REACT_APP_SUBSCRIBER_ID,
    SessionID: process.env.REACT_APP_SESSION_ID,
    AppID: process.env.REACT_APP_APP_ID,
    AppVersion: process.env.REACT_APP_APP_VERSION,
    AppPlatform: process.env.REACT_APP_APP_PLATFORM,
    ServiceAccessToken: process.env.REACT_APP_SERVICE_ACCESS_TOKEN,
    SessionDataLanguageID: languageID,
  };

  var formData = {
    ...oFormData,
    SessionDataJSON: JSON.stringify({
      ...sessionData,
      ...oFormData.SessionDataJSON,
    }),
  };

  var bs = new BS64PNE36Encryption();

  var body = JSON.stringify(formData);
  var formDataEncrypted = bs.encrypt(body);

  let now = moment().format("DD-MMM-YYYY HH:mm:ss");

  let apiKey = bs.encrypt(
    now +
      process.env.REACT_APP_SECRET_API_ID +
      process.env.REACT_APP_SECRET_API_KEY
  );

  let token = process.env.REACT_APP_SECRET_API_TOKEN + "";

  let requestHeaders = {
    Authorization: token,
    "x-api-key": apiKey,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  };
  return fetch(`${process.env.REACT_APP_SECRET_API_URL}/Device/safeexecute2`, {
    method: "POST",
    headers: requestHeaders,
    body: formDataEncrypted,
  })
    .then((response) => {
      return response.text().then((t) => t);
    })
    .then((text) => bs.decrypt(text))
    .then((res) => JSON.parse(res))
    .then((json) => {
      if (json.Status === 200)
        return {
          DataIsLoaded: true,
          errorID: json.ErrorID,
          fieldJSON: json.FieldJSON,
          status: json.Status,
          items: json.Data,
          message: json.Message,
        };
      else
        return {
          DataIsLoaded: false,
          items: [],
          message: json.Message || "Data retrival failed.",
          errorID: null,
          fieldJSON: null,
          status: json.Status,
        };
    })
    .catch((error) => {
      // Handle errors
      console.error("Fetch error:", error);
      return {
        DataIsLoaded: false,
        items: [],
        message: error.Message || "Data retrival failed.",
        errorID: null,
        fieldJSON: null,
        status: 503,
      };
    });
}

export function ExecuteCached(
  FormData,
  cacheKey = null,
  duration = CookieDuration.Minute10
) {
  if (cacheKey != null) {
    var cookieValue = getCookie(cacheKey);

    const ExecuteAndSetCacheCookie = () =>
      Execute(FormData)
        .then((response) => {
          if (trySetCache(cacheKey, response)) {
            setCookie(
              cacheKey,
              cacheKey,
              duration === null ? CookieDuration.Minute10 : duration
            );
          }
          return response;
        })
        .catch((error) => {
          var response = {
            DataIsLoaded: false,
            items: null,
            message: error.Message,
          };
          return response;
        });

    if (cookieValue != null) {
      return getCacheAsync(cacheKey)
        .then((response) => response)
        .catch((error) => {
          var response = ExecuteAndSetCacheCookie();
          return response;
        });
    } else {
      var response = ExecuteAndSetCacheCookie();
      return response;
    }
  } else {
    ClearCache();
    return Execute(FormData);
  }
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
