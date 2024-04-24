import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Test from "pages/Test";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          {/* <Route
            path="/components/:type/:subtype/:name"
            element={<ComponentRenderer />}
          />
          <Route
            path="/components/:type/:name"
            element={<ComponentRenderer />}
          /> */}

          {/* <Route path="/" element={<DynamicPage />}>
              <Route path="/:type" element={<DynamicPage />} />
              <Route path="/:type/:subtype" element={<DynamicPage />} />
              <Route path="/:type/:subtype/:name" element={<DynamicPage />} />
            </Route> */}

          <Route path="/" element={<Test />}>
            <Route path="/:type" element={<Test />} />
            <Route path="/:type/:subtype" element={<Test />} />
            <Route path="/:type/:subtype/:name" element={<Test />} />
          </Route>

          {/* <Route path="MainLandingPage" element={<MainLandingPage />} />
          <Route path="/:type" element={<ComponentList />} /> */}
        </Routes>
      </Router>
    </>
  );
}
