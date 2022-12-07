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
          <div className="row px-md-5">
            <div className="col-sm-7 align-self-center">
              <h3> I'm Sharjeel </h3>
              <h3> Khalid</h3>
              <p className="my-3" style={{ textAlign: "justify" }}>
                <small>
                  I am web and app developer. I believe web design can be more miscellaneous and inclining. With a mission to present various possibilities of web and app development, I am pursuing
                  new aspects through experiments and thoughts.
                </small>{" "}
              </p>
              <button class="learn-more my-2">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">
                  {" "}
                  <a target="_blank" href="https://drive.google.com/file/d/1gMIexkgBlG5pRSp2c1GAWDn7pVV9Ek_y/view?usp=share_link" download className="text-white">
                    Download CV
                  </a>
                </span>
              </button>
            </div>
            <div className="col-sm-5">{window.innerWidth > 480 ? <div className="home-img">{/* <img src="https://via.placeholder.com/350x300" /> */}</div> : ""}</div>
          </div>
          <div className={`pt-md-5 mt-5 mx-md-5 d-flex`} style={{ width: "100%", overflow: "scroll" }}>
            <button
              className={`btn btn-portfolio ${active === 1 ? "active-home" : ""}`}
              onClick={() => {
                setActive(1);
                document.getElementById("about").scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <BsPersonCircle /> About Me
            </button>
            <button
              className={`btn btn-portfolio ${active === 2 ? "active-home" : ""}`}
              onClick={() => {
                setActive(2);
                document.getElementById("resume").scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            >
              <FiFileText />
              &nbsp;Resume
            </button>
            <button className={`btn btn-portfolio ${active === 3 ? "active-home" : ""}`} onClick={() => setActive(3)}>
              <BsBriefcase />
              &nbsp; Portfolio
            </button>
            <button className={`btn btn-portfolio ${active === 4 ? "active-home" : ""}`} onClick={() => setActive(4)}>
              <BiCog />
              &nbsp; Services
            </button>
          </div>
        </div>
      </div>
      <div>
        {active === 1 ? (
          <Suspense fallback={<div></div>}>
            <div id="about">
              <About />
            </div>
          </Suspense>
        ) : (
          ""
        )}

        {active === 2 ? (
          <Suspense fallback={<div></div>}>
            <div id="resume">
              <Resume />
            </div>
          </Suspense>
        ) : (
          ""
        )}

        {active === 3 ? (
          <Suspense fallback={<div></div>}>
            <div>
              <Portfolio />
            </div>
          </Suspense>
        ) : (
          ""
        )}
        {active === 4 ? (
          <Suspense fallback={<div></div>}>
            <div>
              <Services />
            </div>
          </Suspense>
        ) : (
          ""
        )}
        {active === 5 ? (
          <Suspense>
            <div>
              <Contact />
            </div>
          </Suspense>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default Home;
