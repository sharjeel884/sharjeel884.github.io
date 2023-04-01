import React, { useState } from "react";
import "./Portfolio.scss";
import { CiShare1 } from "react-icons/ci";

const Portfolio = () => {
  const [show, setShow] = useState(1);
  const [hover, setHover] = useState(false);

  const portfolio = [
    { img: require("../../assets/autodeals.pk.png"), name: "AutoDeals", link: "https://autodeals.pk", stack: "React, SCSS, Node, SQL", description: "Autodeals.pk is a Pakistani online marketplace for buying and selling used cars, offering a wide range of options and features such as car inspections, financing, and insurance." },
    {
      img: require("../../assets/myauctionsheet.png"),
      name: "My Auction Sheet",
      link: "https://myauctionsheet.com",
      stack: "React, SCSS, Node, SQL",
      description: "It is a Japanese car auction platform that enables users to access real-time auction information, bid on vehicles, and import cars to their desired destinations. The platform provides detailed auction sheets and inspection reports.",
    },
    {
      img: require("../../assets/citybook.png"),
      name: "Citybook",
      link: "https://citybook.pk",
      stack: "React, SCSS, Node, SQL",
      description: "It is a Pakistani online platform that provides information about local businesses, restaurants, events, and classifieds. Users can search for businesses and services in their city, read reviews, and make informed decisions based on their needs and preferences.",
    },
    { img: require("../../assets/autoones.png"), name: "AutoOnes", link: "https://autoones.com", stack: "React, SCSS, Node, SQL", description: "Autoones.com is an e-commerce website specializing in aftermarket auto parts and accessories. They offer a wide range of products for various makes and models, with competitive pricing and fast shipping." },
    { img: require("../../assets/platlhr.gov.png"), name: "Plat Lahore", link: "https://platlhr.gov.pk", stack: "HTML, CSS, JS, PHP", description: "Platlhr.gov.pk is the official website of the government of Punjab, Pakistan largest province. It provides information on government policies, programs, and services, as well as news and updates on Punjab development initiatives." },
    { img: require("../../assets/inpkr.png"), name: "inPKR", link: "https://inpkr.com", stack: "HTML, CSS, JS, PHP", description: "Inpkr.com is an online news and media platform that covers current events and news in Pakistan. They offer a variety of content, including articles, videos, and live streaming, with a focus on politics, sports, and entertainment." },
  ];

  return (
    <div id="portfolio">
      <div className="container">
        <div class="portfolio-card">
          <h4 className="text-start fw-bold" style={{ color: "var(--orange)" }}>
            Portfolio
          </h4>
          <h1>My works that I did for clients</h1>
          <div className="portfolio-tabs">
            <button className={`btn ${show === 1 ? "active" : ""}`} onClick={() => setShow(1)}>
              Websites
            </button>

            <button className={`btn ${show === 2 ? "active" : ""}`} onClick={() => setShow(2)}>
              App
            </button>
          </div>
          {show === 1 ? (
            <div className="portfolio-brands">
              <div className="row mt-md-0 mt-4">
                {portfolio &&
                  portfolio.map((item, i) => (
                    <div className="col-lg-6 col-12 py-md-5 py-4 brands">
                      <div class="row">
                        <div class="col-md-6 content">
                          <div class="screen">
                            <img src={item.img} />
                          </div>
                        </div>
                        <div className="col-md-6 mt-md-0 mt-4">
                          <div class="text-center">
                            <h5 className="fw-bold">{item.name}</h5>
                            <div className=" ">
                              <small>{item.description}</small>
                            </div>
                            <div className="my-3">
                              <strong>{item.stack}</strong>
                            </div>
                            <a className="text-decoration-none" href={item.link} target="_blank">
                              <h6>
                                Live Demo <CiShare1 />
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            ""
          )}

          {show === 2 ? (
            <div className="portfolio-brands">
              <div className="row">
                <div className="col-sm-6 py-5 brands">
                  <div class="row">
                    <div class="col-md-6 content">
                      <div class="screen">
                        <img src={require("../../assets/ringtone-app.png")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="text-center">
                        <h5 className="fw-bold mt-md-0 mt-4">CB Ringtones & Images</h5>
                        <div className=" ">
                          <small>CB ringtones & images app is a mobile application that offers a wide variety of customizable ringtones and wallpapers for smartphones. Users can choose from different categories, including music, nature, and sports, and personalize their phone's look and sound.</small>
                        </div>
                        <div className="my-3">
                          <strong>React-native</strong>
                        </div>
                        <a className="text-decoration-none" href="https://play.google.com/store/apps/details?id=pk.citybook.ri" target="_blank">
                          <h6>
                            Live Demo <CiShare1 />
                          </h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 py-5 brands">
                  <div class="row">
                    <div class="col-md-6 content">
                      <div class="screen">
                        <img src={require("../../assets/citybook-app.png")} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="text-center">
                        <h5 className="fw-bold mt-md-0 mt-4">Citybook App</h5>
                        <div className=" ">
                          <small>Citybook app is a mobile application that allows users to search and discover local businesses and services in Pakistan. Users can read reviews, view photos, and contact businesses directly from the app, making it easy to find what they need.</small>
                        </div>
                        <div className="my-3">
                          <strong>React-native</strong>
                        </div>
                        <a className="text-decoration-none" href="https://play.google.com/store/apps/details?id=pk.citybook" target="_blank">
                          <h6>
                            Live Demo <CiShare1 />
                          </h6>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
