import "./Resume.scss";

function Resume() {
  const project = [
    { link: "https://autodeals.pk", name: "AutoDeals", desc: "Its a MERN STACK based Website.", date: "04/2022 - 10/2022" },
    { link: "https://myauctionsheet.com", name: "My Auction Sheet", desc: "Its a MERN STACK based Website.", date: "02/2022 - 04/2022" },
    { link: "https://autoones.com", name: "AutoOnes", desc: "Its a MERN STACK based Website.", date: "11/2021 - 07/2022" },
    { link: "https://citybook.pk", name: "CityBook", desc: "Its a MERN STACK based Website.", date: "12/2021 - 10/2022" },
    { link: "https://platlhr.gov.pk", name: "Plat Lahore", desc: "It's a PHP based website with backend of PHP & MYSQL front-end with HTML, CSS and Javascript", date: "09/2021 - 11/2021" },
    { link: "https://chooseandbuy.pk", name: "Choose & buy", desc: "Its a wordpress website", date: "10/2021 - 11/2021" },
    {
      link: "https://inpkr.com",
      name: "inPKR",
      desc: "PHP based Website provide all types of mobile prices, petrol prices, gold prices and we are working on to make new prices modules",
      date: "10/2022 - Present",
    },
  ];

  <div className="">
    <div className="d-flex justify-content-between">
      <h5>
        <a href="" target="_blank">
          inPKR
        </a>
      </h5>
      <h6>(10/2022 - Present)</h6>
    </div>
    <p className=""></p>
  </div>;
  return (
    <div id="resume" className="">
      <div className="container">
        <div className="resume-card">
          <h4 className="resume-heading">Resume</h4>
          <h1>Combination of Skill & Experience</h1>

          <div className="row">
            <div className="col-sm-7">
              <div>
                <div className="d-flex mt-5">
                  <div className="circle"></div>
                  <h2 className="mb-0">Education</h2>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>Bachelors in Computer Science (BSCS) PUCIT</h5>
                    <h6>2016-2022</h6>
                  </div>
                  <h5 className="">University of the Punjab</h5>
                  <p className="">Object Oriented Programming - Database Systems - Software engineering - Programming Data Structure & Algorithm - Object Oriented Analysis & Design - Analysis of Algorithm</p>
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between">
                    <h5>Intermediate </h5>
                    <h6>2014-2016</h6>
                  </div>
                  <h5 className="">Govt Islamia College Civilines.</h5>
                </div>
              </div>
              <div className="experience">
                <div className="d-flex mt-5">
                  <div className="circle"></div>
                  <h2 className="mb-0">Experience</h2>
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between">
                    <h5>Wellcreator</h5>
                    <h6>05/2021 - Present</h6>
                  </div>
                  <p className="">
                    - Working on React.js and React-native as a Front-end Engineer with Material UI , Bootstrap and others.
                    <br />
                    - Collaborate and work with frontend and backend need of projects.
                    <br />
                    - Work as a team leader in some of my projects.
                    <br />
                    - Work as a react-native mobile app developer as well. Converting React js app to Next js app.
                    <br />
                    - Connecting frontend to API's.
                    <br />- Maintain also the optimisation of the app
                  </p>
                </div>
              </div>
              <div className="mb-5 mt-md-5 mt-4 col-sm-9">
                <div className="d-flex">
                  <div className="circle"></div>
                  <h2 className="mb-0">Skills</h2>
                </div>
                <div className="d-flex justify-content-between flex-wrap mt-3">
                  <h4 className="m-3">HTML</h4>
                  <h4 className="m-3">SCSS</h4>
                  <h4 className="m-3">React.js</h4>
                  <h4 className="m-3">React-native</h4>
                  <h4 className="m-3">Wodpress</h4>
                  <h4 className="m-3">Shopify</h4>
                  <h4 className="m-3">PHP</h4>
                  <h4 className="m-3">SQL</h4>
                </div>
                {/* <div>
                  <div className="progress-bar-time mt-md-4 mt-3">
                    <h4>React.js</h4>
                    <div className="d-flex ">
                      <div className="progress-value"></div>
                      <div className="percentage">90%</div>
                    </div>
                    <div className="progress"></div>
                  </div>
                  <div className="progress-bar-time">
                    <h4>React-Native</h4>
                    <div className="d-flex">
                      <div className="progress-value-efficiency"></div>
                      <div className="percentage">80%</div>
                    </div>
                    <div className="progress"></div>
                  </div>
                  <div className="progress-bar-time">
                    <h4>Wordpress</h4>
                    <div className="d-flex ">
                      <div className="progress-value"></div>
                      <div className="percentage">90%</div>
                    </div>
                    <div className="progress"></div>
                  </div>
                  <div className="progress-bar-time">
                    <h4>Shopify</h4>
                    <div className="d-flex ">
                      <div className="progress-value"></div>
                      <div className="percentage">90%</div>
                    </div>
                    <div className="progress"></div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-sm-5">
              <div className="d-flex mt-md-5 mt-3">
                <div className="circle"></div>
                <h2 className="mb-0">Projects</h2>
              </div>
              {project &&
                project.map((item, i) => (
                  <div className="mt-3">
                    <div className="d-flex justify-content-between ">
                      <h5>
                        <a href={item.link} target="_blank">
                          {item.name}
                        </a>
                      </h5>
                      <h6>{item.date}</h6>
                    </div>
                    <p className="">{item.desc}</p>
                  </div>
                ))}

              <div className="mb-5 mt-5">
                <div className="d-flex">
                  <div className="circle"></div>
                  <h2 className="mb-0">Personal Skills</h2>
                </div>
                <div className="progress-bar-time mt-4">
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
                {/* <div className="progress-bar-time">
                  <h4>Intigrity</h4>
                  <div className="d-flex ">
                    <div className="progress-value"></div>
                    <div className="percentage">90%</div>
                  </div>
                  <div className="progress"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Resume;
