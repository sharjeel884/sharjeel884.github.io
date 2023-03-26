// Libraries
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../Components/Home/Home"));


function WebsiteRoutes() {

  return (
    <Suspense fallback="Loading ..">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}
export default WebsiteRoutes;
