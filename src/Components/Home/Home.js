import React, { Suspense, lazy, useState } from "react";
import "./Home.scss";
import { BsPersonCircle, BsBriefcase } from "react-icons/bs";
import { FiFileText } from "react-icons/fi";
import { BiCog } from "react-icons/bi";
const About = lazy(() => import("../About/About"));
const Services = lazy(() => import("../Services/Services"));
const Resume = lazy(() => import("../Resume/Resume.js"));
const Portfolio = lazy(() => import("../Portfolio/Portfolio"));
const Contact = lazy(() => import("../Contact/Contact"));

function Home() {
  const [active, setActive] = useState();

  return (
    <div id="home" className="mb-md-0 mb-4">
      <div className="container py-md-3 px-0">
        <div className="card home-card">
          <div className="row">
            <div className="col-sm-6 align-self-center">
              <h1>
                I'm <span style={{ color: "var(--orange)" }}>Sharjeel Khalid</span>
              </h1>
              <p className="my-3" style={{ textAlign: "justify" }}>
                I am web and app developer. I believe web develop can be more miscellaneous and inclining. With a mission to present various possibilities of web and app development, I am pursuing new aspects through experiments and thoughts.
              </p>
              <button class="learn-more my-2">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">
                  {" "}
                  <a target="_blank" href="https://drive.google.com/file/d/1gMIexkgBlG5pRSp2c1GAWDn7pVV9Ek_y/view?usp=share_link" download>
                    Download CV
                  </a>
                </span>
              </button>
            </div>
            <div className="col-sm-6">
              <div className="d-flex justify-content-center">
                <img className="main-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Suspense fallback={<div></div>}>
          <div id="about">
            <About />
          </div>
        </Suspense>

        <Suspense fallback={<div></div>}>
          <div id="resume">
            <Resume />
          </div>
        </Suspense>

        <Suspense fallback={<div></div>}>
          <div>
            <Portfolio />
          </div>
        </Suspense>
        <Suspense fallback={<div></div>}>
          <div>
            <Services />
          </div>
        </Suspense>
        <Suspense>
          <div>
            <Contact />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
export default Home;
