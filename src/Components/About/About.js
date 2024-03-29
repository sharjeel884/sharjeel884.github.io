import "./About.scss";
import "../../CustomButton.scss";

function About() {
  return (
    <div id="about">
      <div className="container py-md-5 py-2">
        <div className="row">
          <div className="col-lg-8 col-12">
            <h4 className="fw-bold" style={{ color: "var(--orange)" }}>
              About Me
            </h4>
            <h1>Front-End Engineer </h1>
            <b>An amorous Web and App Developer sited in Lahore, Pakistan.</b>
            <p className="my-2 paragraph">
              Hey! My name is Sharjeel Khalid. I am Web and App developer. I am very amorous and passionate with my work. I have attained the learning and abilities that is required to make your plan, a sucess. I am proficient in developing creating user interfaces, writing and testing codes, troubleshooting simple/complex issues and implementing new features based on user feedback.
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
          <div className="col-sm-4 d-none d-lg-block">
            <div className="about-detail">
              <div className="">
                <h6 className="fw-bold mb-0">Name :</h6>
                <p>Sharjeel Khalid</p>
                <h6 className="fw-bold mb-0">Email :</h6>
                <p>
                  <a href="mailto:sharjeelkhalid416@gmail.com">sharjeelkhalid416@gmail.com</a>
                </p>
                <h6 className="fw-bold mb-0">Nationality :</h6>
                <p>Pakistan</p>
                <h6 className="fw-bold mb-0">Designation :</h6>
                <p className="mb-0">Front-end Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
