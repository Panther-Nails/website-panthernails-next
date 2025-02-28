import FallbackLoading from "helpers/FallbackLoading";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const SelectLanguage = lazy(() => import("./SelectLanguage"));
const DynamicPageRenderer = lazy(() => import("./DynamicPageRenderer"));

export default () => {
  return (
    <Suspense fallback={<FallbackLoading />}>
      <Routes>
        <Route element={<SelectLanguage />}>
          <Route path="/" element={<DynamicPageRenderer />} />
          <Route path=":type" element={<DynamicPageRenderer />} />
          <Route path=":type/:subtype" element={<DynamicPageRenderer />} />
          <Route
            path=":type/:subtype/:name"
            element={<DynamicPageRenderer />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
