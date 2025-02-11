import React from "react";
import { Routes, Route } from "react-router-dom";
import SelectLanguage from "SelectLanguage";
import { SWRConfig } from "swr";
import DynamicPageTest from "DynamicPageTest";

const DynamicPageComponent = () => {
  return <DynamicPageTest />;
};

export default () => {
  return (
    <Routes>
      <Route element={<SelectLanguage />}>
        <Route path="/" element={DynamicPageComponent()} />
        <Route path=":type" element={DynamicPageComponent()} />
        <Route path=":type/:subtype" element={DynamicPageComponent()} />
        <Route path=":type/:subtype/:name" element={DynamicPageComponent()} />
      </Route>
    </Routes>
  );
};
