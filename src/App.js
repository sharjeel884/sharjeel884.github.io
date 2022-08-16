import { BrowserRouter as Router } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./App.css";
const Home = lazy(() => import("./Components/Home/Home"));
const About = lazy(() => import("./Components/About/About"));
const Services = lazy(() => import("./Components/Services/Services"));
const Resume = lazy(() => import("./Components/Resume/Resume.js"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <h1>Loading .. </h1>
          </div>
        }
      >
        <div className="bg-img">
          <div style={{ margin: "0px 120px", padding: "20px 0" }}>
            <Header />
            <Home />
            <About />
            <Services />
            <Resume />
            <Footer />
          </div>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
