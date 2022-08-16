import "./About.scss";
import "../../CustomButton.scss"
import { AiOutlineReconciliation } from "react-icons/ai";

function About(){
    return(
        <div id="about">
            <div className="container">
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
                                    <p>Front-end Developer</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6">
                            <h4><AiOutlineReconciliation /> About Me</h4>
                            <h1>Front-end Developer </h1>
                            <b>lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum</b>
                            <p className="my-3">lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
                            <button class="learn-more my-2">
                                <span class="circle" aria-hidden="true">
                                <span class="icon arrow"></span>
                                </span>
                                <span class="button-text"> Download CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default About;