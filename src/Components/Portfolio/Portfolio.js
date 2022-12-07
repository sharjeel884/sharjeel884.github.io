import React, { useState } from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  const [show, setShow] = useState(1);
  const [hover, setHover] = useState(false);

  const portfolio = [
    { img: require("../../assets/autodeals-logo.efa0266d.png"), name: "AutoDeals", link: "https://autodeals.pk" },
    { img: require("../../assets/header.png"), name: "My Auction Sheet", link: "https://myauctionsheet.com" },
    { img: require("../../assets/city book logo.png"), name: "Citybook", link: "https://citybook.pk" },
    { img: require("../../assets/plat-logo.png"), name: "Plat Lahore", link: "https://platlhr.gov.pk" },
    { img: require("../../assets/inpkr.jpg"), name: "inPKR", link: "https://inpkr.com" },
    { img: require("../../assets/arsteel.jpeg"), name: "Ar Steel Works", link: "https://arsteelworks.com" },
    { img: require("../../assets/logo-grey-1.png"), name: "Choose & buy", link: "https://chooseandbuy.pk" },
    { img: require("../../assets/WhatsApp_Image_2022-03-16_at_6.18.38_PM-removebg-preview.png"), name: "Shaan Lights", link: "https://shaanlights.com" },
  ];

  return (
    <div id="portfolio">
      <div>
        <div class="card portfolio-card">
          <h4 className="resume-heading">Portfolio</h4>
          <h1>My works that I did for clients</h1>
          <div className="portfolio-tabs">
            <button className={`btn ${show === 1 ? "active" : ""}`} onClick={() => setShow(1)}>
              All
            </button>
            <button className={`btn ${show === 2 ? "active" : ""}`} onClick={() => setShow(2)}>
              Website
            </button>
            <button className={`btn ${show === 3 ? "active" : ""}`} onClick={() => setShow(3)}>
              App
            </button>
          </div>
          {show === 1 ? (
            <div className="portfolio-brands">
              <div className="row">
                {portfolio &&
                  portfolio.map((item, i) => (
                    <div className="col-sm-3">
                      <div class="brand-img mb-4">
                        <div className="d-flex justify-content-center">
                          <img src={item.img} alt="Avatar" class="image" style={{ width: "150px", height: "150px", objectFit: "contain" }} />
                        </div>
                        <div class="overlay">
                          <div class="text">
                            <h5 className="text-white">{item.name}</h5>
                            <a href={item.link} target="_blank" className="text-white">
                              <small>{item.link}</small>
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
                {portfolio &&
                  portfolio.map((item, i) => (
                    <div className="col-sm-3">
                      <div class="brand-img mb-4">
                        <div className="d-flex justify-content-center">
                          <img src={item.img} alt="Avatar" class="image" style={{ width: "150px", height: "150px", objectFit: "contain" }} />
                        </div>
                        <div class="overlay">
                          <div class="text">
                            <h5 className="text-white">{item.name}</h5>
                            <a href={item.link} target="_blank" className="text-white">
                              <small>{item.link}</small>
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
          {show === 3 ? (
            <div className="portfolio-brands">
              <div className="row">
                <div className="col-sm-3">
                  <div class="brand-img mb-4">
                    <div className="d-flex justify-content-center">
                      <img src={require("../../assets/city book logo.png")} alt="Avatar" class="image" style={{ width: "150px", height: "150px", objectFit: "contain" }} />
                    </div>
                    <div class="overlay">
                      <div class="text">
                        <h5 className="text-white">Citybook</h5>
                        <a href="#" target="_blank" className="text-white">
                          <small>Citybook</small>
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
