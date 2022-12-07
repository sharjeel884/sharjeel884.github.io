import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Spinner } from "react-bootstrap";
import "./App.css";
const Home = lazy(() => import("./Components/Home/Home"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Header = lazy(() => import("./Components/Header/Header"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ marginTop: "200px" }}>
            <h1 style={{ fontSize: "50px", textAlign: "center", alignSelf: "center" }}>
              <Spinner animation="border" role="status" style={{ fontSize: "80px", textAlign: "center", color: "var(--orange)" }}></Spinner>
              <span>Loading...</span>
            </h1>
          </div>
        }
      >
        <div className="bg-img ">
          <div className="container">
            <Header />
            <Home />
            <Footer />
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
