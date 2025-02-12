import useSWR, { useSWRConfig } from "swr";
import { ExecuteQuery } from "./APIService";

export function useExecuteQuerySWR(key, formDataParams, swrValidations) {
  const { cache } = useSWRConfig();
  const keys = Array.from(cache.keys());

  const isAvailableInCache = keys.includes(key) ? false : true;

  const fetcher = async () => {
    const formData = { ...formDataParams, OperationName: "Query" };
    const response = await ExecuteQuery(formData);
    if (response?.DataIsLoaded) {
      return response;
    } else {
      throw new Error(response?.message || "Data retrieval failed.");
    }
  };

  const customValidation = {
    revalidateIfStale: isAvailableInCache,
    revalidateOnMount: isAvailableInCache,
    revalidateOnReconnect: isAvailableInCache,
    revalidateOnFocus: isAvailableInCache,
  };

  const { data, error } = useSWR(key, fetcher, {
    ...customValidation,
    ...swrValidations,
  });

  return { data, error };
}

export function setPageMetaData(metaData) {
  document.title =
    metaData?.Title + " - Panther Nails Technologies Private Limited.";

  const existingMetaTagDescription = document.querySelector(
    'meta[name="description"]'
  );
  existingMetaTagDescription.setAttribute("content", metaData?.Description);

  const existingMetaTagKeywords = document.querySelector(
    'meta[name="keywords"]'
  );
  existingMetaTagKeywords.setAttribute("content", metaData?.Keywords);
}
