import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DynamicPage from "DynamicPage";
import SelectLanguage from "SelectLanguage";
import { useSession } from "providers/SessionProvider";
import PageNotFound from "helpers/PageNotFound";

const DynamicPageComponent = () => {
  // Indexdb activity log
  return <DynamicPage />;
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
