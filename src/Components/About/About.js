import "./About.scss";
import "../../CustomButton.scss";
import { AiOutlineReconciliation } from "react-icons/ai";

function About() {
  return (
    <div id="about">
      <div className={`${window.innerWidth > 480 ? "" : ""}`}>
        <div className="card about-card">
          <div className="row">
            <div className="col-sm-6">
              <div className="about-img">
                <img src="https://via.placeholder.com/300" />
                <div className="inner-card card">
                  <h5>Name</h5>
                  <p>Sharjeel Khalid</p>
                  <h5>DOB #</h5>
                  <p>07 March 1998</p>
                  <h5>Email</h5>
                  <p>sharjeelkhalid416@gmail.com</p>
                  <h5>Phone</h5>
                  <p>+923224669050</p>
                  <h5>Nationality</h5>
                  <p>Pakistan</p>
                  <h5>Designation</h5>
                  <p className="mb-0">Front-end Engineer</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h4>
                <AiOutlineReconciliation /> About Me
              </h4>
              <h1>Front-end Engineer </h1>
              <b>An amorous Web and App Developer sited in Lahore, Pakistan.</b>
              <p className="my-4 paragraph">
                Hey! My name is Sharjeel Khalid. I am Web and App developer. I am very amorous and passionate with my work. I have attained the learning and abilities that is required to make your
                plan, a sucess. I am proficient in developing creating user interfaces, writing and testing codes, troubleshooting simple/complex issues and implementing new features based on user
                feedback.
              </p>
              <button class="learn-more my-2">
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text text-dark">
                  <a href="https://drive.google.com/file/d/1gMIexkgBlG5pRSp2c1GAWDn7pVV9Ek_y/view?usp=share_link" download className="text-dark ">
                    Download CV
                  </a>{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
