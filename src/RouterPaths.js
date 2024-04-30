import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DynamicPage from "DynamicPage";
import Test from "pages/Test";
import PrivacyPolicy from "pages/PrivacyPolicy";

const DynamicPageComponent = () => {
  console.log("url", window.location.pathname);
  return <DynamicPage />;
};

export default () => (
  <Routes>
    <Route exact path="/" element={DynamicPageComponent()}>
      <Route path="/:type" element={DynamicPageComponent()} />
      <Route path="/:type/:subtype" element={DynamicPageComponent()} />
      <Route path="/:type/:subtype/:name" element={DynamicPageComponent()} />
    </Route>
    <Route path="/admin-panel" element={<Test />}>
      <Route path="/admin-panel/policy" element={<PrivacyPolicy />} />
    </Route>
  </Routes>
);
