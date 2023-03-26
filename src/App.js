import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
const Home = lazy(() => import("./Components/Home/Home"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));

function App() {
  return (
    <div className="bg-img ">
      <div className="container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
