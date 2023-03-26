import { IoIosCog } from "react-icons/io";
import "./Services.scss";
import { BiCodeAlt } from "react-icons/bi";
import { FaShopify } from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";

function Services() {
  const services = [
    {
      icon: <BiCodeAlt />,
      name: "Web & App Developement",
      desc: "We believe in hand coded web development with fully customization options.",
    },
    { icon: <FaShopify />, name: "Shopify", desc: "We provide the shopify website development for your business." },
    { icon: <BsWordpress />, name: "Wordpress", desc: "These WordPress development pros can design and develop sites that boost your brand and business returns." },
  ];

  return (
    <div id="services">
      <div>
        <div className="card service-card">
          <h4>
            <IoIosCog /> Services
          </h4>
          <h1>Never compromise</h1> <h1> with quality</h1>
          <div className="row category">
            {services &&
              services.map((item, i) => (
                <div className="col-sm-4 px-0" key={i}>
                  <div className="card service-inner-card" style={{ height: "95%" }}>
                    <div className="icon">
                      <h2>{item.icon}</h2>
                    </div>
                    <h5>{item.name}</h5>
                    <p className="mb-0 mt-3">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
