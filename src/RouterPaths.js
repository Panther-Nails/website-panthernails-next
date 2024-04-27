import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DynamicPage from "DynamicPage";
import Test from "pages/Test";
import PrivacyPolicy from "pages/PrivacyPolicy";

export default () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<DynamicPage />}>
        <Route path="/:type" component={<DynamicPage />} />
        <Route path="/:type/:subtype" component={<DynamicPage />} />
        <Route path="/:type/:subtype/:name" component={<DynamicPage />} />
      </Route>
      <Route path="/admin-panel" element={<Test />}>
        <Route path="/admin-panel/policy" component={<PrivacyPolicy />} />
      </Route>
    </Routes>
  </Router>
);
