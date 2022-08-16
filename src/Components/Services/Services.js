import { IoIosCog } from "react-icons/io"
import "./Services.scss";


function Services() {
    return(
        <div id="services">
            <div className="container">
                <div className="card service-card">
                    <h4><IoIosCog /> Services</h4>
                    <h1>Never compromise</h1> <h1> with quality</h1>
                    <div className="row category">
                        {[1,2,3,4,5,6].map ((item) => (
                            <div className="col-sm-4 px-0">
                                <div className="card service-inner-card">
                                    <div className="icon">
                                        <h2><IoIosCog /></h2>
                                    </div>
                                    <h5>Lorem ipsum</h5>
                                    <p>Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                                </div>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Services;