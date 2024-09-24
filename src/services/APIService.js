import { getCacheAsync, trySetCache } from "./CacheService";
import { Duration, getCookie, setCookie } from "./CookieService";
import encrypted from "../session.json";
import { decryptData } from "./EncryptionService";
import { BS64PNE36 } from "./cipher";

function GetAuthenticationToken(companyID) {
  var bs = new BS64PNE36();

  https: return fetch(
    `${encrypted.baseUrl}/Auth/GenerateToken?sKey=${companyID}`,
    {
      method: "get",
    }
  ).then((response) => {
    if (!response.ok) {
      return bs.encrypt(
        JSON.stringify({
          DataIsLoaded: false,
          items: [],
          message: response.Message || "Data retrival failed.",
        })
      );
    }
    return response.text().then((t) => t);
  });
}

export function Execute(oFormData) {
  var decryptionKey = decryptData(
    "U2FsdGVkX1+W8KoKL4/oI5HlgnvejSahTXl44m6BXuV/TfvRV+NVLObS6Puiq/pu",
    "abcd12345"
  );

  var session = decryptData(encrypted.session, decryptionKey);

  var sessionData = {
    CompanyID: session.CompanyID,
    SubscriberID: session.SubscriberID,
    AppID: session.AppID,
    AppVersion: session.AppVersion,
    AppPlatform: session.AppPlatform,
  };

  var formData = {
    ...oFormData,
    SessionDataJSON: JSON.stringify({
      ...sessionData,
      ...oFormData.SessionDataJSON,
    }),
  };

  var bs = new BS64PNE36();
  var body = JSON.stringify(formData);
  var formDataEncrypted = bs.encrypt(body);

  return GetAuthenticationToken(session.CompanyID).then((token) => {
    return fetch(`${encrypted.baseUrl}/Device/safeexecute`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
      body: formDataEncrypted,
    })
      .then((response) => {
        if (!response.ok) {
          return bs.encrypt(
            JSON.stringify({
              DataIsLoaded: false,
              items: [],
              message: response.Message || "Data retrival failed.",
            })
          );
        }

        return response.text().then((t) => t);
      })
      .then((text) => bs.decrypt(text))
      .then((res) => JSON.parse(res))
      .then((json) => {
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
  });
}

export function ExecuteCached(
  FormData,
  cacheKey = null,
  duration = Duration.Minute10
) {
  if (cacheKey != null) {
    var cookieValue = getCookie(cacheKey);

    const ExecuteAndSetCacheCookie = () =>
      Execute(FormData)
        .then((response) => {
          if (trySetCache(cacheKey, response)) {
            setCookie(
              cacheKey,
              "data",
              duration == null ? Duration.Minute : duration
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
    return Execute(FormData);
  }
}

export function ExecuteCommand(FormData) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "Command";

  return Execute(oFormData);
}

export function ExecuteQuery(
  FormData,
  cacheKey = null,
  duration = Duration.Minute10
) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "Query";

  return ExecuteCached(oFormData, cacheKey, duration);
}

export function ExecuteFile(FormData) {
  var oFormData = { ...FormData };
  oFormData.OperationName = "File";

  return Execute(oFormData);
}
