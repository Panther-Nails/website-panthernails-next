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
      <Route
        exact
        path="/"
        element={
          <>
            <SelectLanguage />
            {DynamicPageComponent()}
          </>
        }
      >
        <Route path=":lang" element={DynamicPageComponent()} />
        <Route path=":lang/:type" element={DynamicPageComponent()} />
        <Route path=":lang/:type/:subtype" element={DynamicPageComponent()} />
        <Route
          path=":lang/:type/:subtype/:name"
          element={DynamicPageComponent()}
        />
      </Route>
      <Route path="*" element={<Navigate to={`/en`} />} />
    </Routes>
  );
};
