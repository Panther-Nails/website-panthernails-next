import { CookieConsentValue, CookieValues } from "./CookieService";

const cacheName = "myCache";

export const trySetCache = (cacheKey, data) => {
  console.log("cacheKey", cacheKey);

  if (
    CookieConsentValue === CookieValues.Accepted ||
    CookieConsentValue === CookieValues.AcceptedEssential
  ) {
    caches.open(cacheName).then((cache) => {
      cache.delete(cacheKey).then((response) => {});
    });

    const jsonResponse = new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json",
      },
    });

    const promise = caches.open(cacheName).then((cache) => {
      cache.put(cacheKey, jsonResponse);
    });

    return true;
  } else {
    return false;
  }
};

export const getCache = (cacheKey, resolverDelegate) => {
  console.log("resolverDelegate", resolverDelegate);

  const cacheData = caches
    .match(cacheKey)
    .then((res) => {
      return res;
    })
    .then((r) => r.json())
    .then();

  const promise = cacheData
    .then((result) => {
      console.log("resolverDelegate result", result);
      resolverDelegate(result);
    })
    .catch(function (error) {
      resolverDelegate({
        DataIsLoaded: false,
        items: [],
        message: error.message,
      });
    });
};

export const getCacheAsync = (cacheKey) => {
  return caches
    .match(cacheKey)
    .then((response) => {
      console.log("response", response);

      return response;
    })
    .then((r) => r.json())
    .then();
};
