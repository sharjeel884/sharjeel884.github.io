import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div id="footer" className="container">
      <div className="d-flex justify-content-between my-4 mt-5">
        <h4 className="mb-0">
          Develop by <span style={{ color: "var(--orange)" }}>Sharjeel</span>
        </h4>
        <h4 className="d-flex mb-0 align-self-center">
          <a href="github.com/sharjeel884" target="_blank" className="text-dark me-3">
            <AiFillGithub />
          </a>
          <a href="linkedin.com/in/sharjeel-khalid-a40298203" target="_blank" className="text-dark me-3">
            <AiFillLinkedin />
          </a>
        </h4>
      </div>
    </div>
  );
}
export default Footer;
