import React, { Suspense, lazy, useState } from "react";
import "./Home.scss";
const About = lazy(() => import("../About/About"));
const Services = lazy(() => import("../Services/Services"));
const Resume = lazy(() => import("../Resume/Resume.js"));
const Portfolio = lazy(() => import("../Portfolio/Portfolio"));
const Contact = lazy(() => import("../Contact/Contact"));

function Home() {
  const [active, setActive] = useState();

  return (
    <>
      <div id="home">
        <div className="container py-5">
          <div className="home-card">
            <div className="row">
              <div className="col-sm-6 d-md-none d-block ">
                <div className="d-flex justify-content-center mb-4">
                  <img className="main-img" src={require("../../assets/sharjeel.jpg")} />
                </div>
              </div>
              <div className="col-sm-6 align-self-center">
                <h1 className="fw-bold">
                  Front-End React <br /> Developer
                </h1>
                <p className="my-3" style={{ textAlign: "justify" }}>
                  Hi, I'm <strong style={{ color: "var(--orange)" }}>Sharjeel</strong>. I am web & app developer. I believe web develop can be more miscellaneous and inclining. With a mission to present various possibilities of web and app development, I am pursuing new aspects through experiments and thoughts.
                </p>
                <button class="learn-more my-2">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">
                    {" "}
                    <a className="text-dark" target="_blank" href="https://drive.google.com/file/d/1gMIexkgBlG5pRSp2c1GAWDn7pVV9Ek_y/view?usp=share_link" download>
                      Download CV
                    </a>
                  </span>
                </button>
                <div class="row mt-3 ">
                  <div className="col-lg-3 col-4 align-self-center border-dark border-end  ">
                    <h6 className="mb-0">Tech Stack </h6>
                  </div>
                  <div className="col-lg-9 col-8 d-flex align-self-center flex-md-nowrap flex-wrap ps-md-5">
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/html.png")} />
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/css-3.png")} />
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/js.png")} />
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/react.png")} />
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/physics.png")} />
                    <img className="m-3" style={{ width: "30px", height: "30px", objectFit: "contain" }} src={require("../../assets/tech/sass.png")} />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 d-md-block d-none">
                <div className="d-flex justify-content-end">
                  <img className="main-img" src={require("../../assets/sharjeel.jpg")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Suspense fallback={<div></div>}>
          <div id="about-section">
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <div id="portfolio-section">
            <Portfolio />
          </div>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <div id="resume-section">
            <Resume />
          </div>
        </Suspense>

        {/* <Suspense fallback={<div></div>}>
          <div>
            <Services />
          </div>
        </Suspense> */}
        <Suspense>
          <div id="contact-section">
            <Contact />
          </div>
        </Suspense>
      </div>
    </>
  );
}
export default Home;
