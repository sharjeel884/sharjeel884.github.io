import "./Resume.scss";

function Resume() {
  return (
    <div id="resume">
      <div className="container">
        <div className="card resume-card">
          <div className="row">
            <div className="col-sm-7">
              <h4 className="resume-heading">Resume</h4>
              <h1>
                Combination of Skill <br />& Experience
              </h1>

              <div>
                <div className="d-flex mt-5">
                  <div className="circle"></div>
                  <h2 className="mb-0">Education</h2>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>Bacholar Sciences</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="text-muted">University Name</h5>
                  <p className="text-muted">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>Bacholar Sciences</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="text-muted">University Name</h5>
                  <p className="text-muted">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>Bacholar Sciences</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="text-muted">University Name</h5>
                  <p className="text-muted mb-0">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
              <div className="experience">
                <div className="d-flex mt-5">
                  <div className="circle"></div>
                  <h2 className="mb-0">Experience</h2>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between">
                    <h5>Bacholar Sciences</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="text-muted">University Name</h5>
                  <p className="text-muted">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between">
                    <h5>Bacholar Sciences</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="text-muted">University Name</h5>
                  <p className="text-muted">Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="d-flex">
                <div className="circle"></div>
                <h2 className="mb-0">Personal Skills</h2>
              </div>
              <div className="progress-bar-time">
                <h4>Time Management</h4>
                <div className="d-flex ">
                  <div className="progress-value"></div>
                  <div className="percentage">90%</div>
                </div>
                <div className="progress"></div>
              </div>
              <div className="progress-bar-time">
                <h4>Efficiency</h4>
                <div className="d-flex">
                  <div className="progress-value-efficiency"></div>
                  <div className="percentage">80%</div>
                </div>
                <div className="progress"></div>
              </div>
              <div className="progress-bar-time">
                <h4>Intigrity</h4>
                <div className="d-flex ">
                  <div className="progress-value"></div>
                  <div className="percentage">90%</div>
                </div>
                <div className="progress"></div>
              </div>
              <div className="progress-bar-rounded">
                <div className="progress-value"></div>
                <div className="progress"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
