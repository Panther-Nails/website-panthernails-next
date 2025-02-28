import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SelectLanguage = lazy(() => import("./SelectLanguage"));
const DynamicPageRenderer = lazy(() => import("./DynamicPageRenderer"));

export default () => {
  return (
    <Routes>
      <Route element={<SelectLanguage />}>
        <Route path="/" element={<DynamicPageRenderer />} />
        <Route path=":type" element={<DynamicPageRenderer />} />
        <Route path=":type/:subtype" element={<DynamicPageRenderer />} />
        <Route path=":type/:subtype/:name" element={<DynamicPageRenderer />} />
      </Route>
    </Routes>
  );
};
