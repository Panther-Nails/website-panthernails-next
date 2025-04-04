import { useSession } from "providers/SessionProvider";
import { CookieConsentValue, CookieValues } from "./CookieService";

const cacheName = "myCache";

export const trySetCache = (cacheKey, data) => {
  if (CookieConsentValue === CookieValues.Rejected) {
    ClearCache();
    return false;
  }

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
};

export const ClearCache = () => {
  caches.keys().then((cacheNames) => {
    cacheNames.forEach((cacheName) => {
      caches.delete(cacheName).then(() => {});
    });
  });
};

export const getCache = (cacheKey, resolverDelegate) => {
  const cacheData = caches
    .match(cacheKey)
    .then((res) => {
      return res;
    })
    .then((r) => r.json())
    .then();

  // eslint-disable-next-line
  const promise = cacheData
    .then((result) => {
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
      return response;
    })
    .then((r) => r.json())
    .then();
};
