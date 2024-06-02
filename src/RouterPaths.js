import React from "react";
import { Routes, Route } from "react-router-dom";
import DynamicPage from "DynamicPage";

const DynamicPageComponent = () => {
  // console.log("url", window.location.pathname);
  return <DynamicPage />;
};

export default () => (
  <Routes>
    <Route exact path="/" element={DynamicPageComponent()}>
      <Route path="/:type" element={DynamicPageComponent()} />
      <Route path="/:type/:subtype" element={DynamicPageComponent()} />
      <Route path="/:type/:subtype/:name" element={DynamicPageComponent()} />
    </Route>
  </Routes>
);
