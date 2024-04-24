import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "styles/GlobalStyles";
import DynamicPage from "DynamicPage";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<DynamicPage />}>
            <Route path="/:type" element={<DynamicPage />} />
            <Route path="/:type/:subtype" element={<DynamicPage />} />
            <Route path="/:type/:subtype/:name" element={<DynamicPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
