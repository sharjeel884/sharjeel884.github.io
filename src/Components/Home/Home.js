import "./Home.scss";
function Home() {

  return (
    <div id="home">
       <div className="container py-3">
       <div className="card home-card">
          <div className="row px-5">
              <div className="col-sm-7 align-self-center">
                  <h1>
                    Hello </h1>
                    <h1>  I'm Sharjeel  </h1>
                    <h1>  Khalid
                  </h1>
                  <p className="my-5">
                    A full stack allround <i><b>Front-end Developer</b></i> Must explain to how all this <br/>  pain the system and expound the actual.
                  </p>
                  <button class="learn-more my-2">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text"> Download CV</span>
                  </button>
              </div>
              <div className="col-sm-5">
                <div className="home-img">
                  <img src="https://via.placeholder.com/350x500" />
                </div>
              </div>
          </div>
        </div>
       </div>
    </div>
  );
}
export default Home;
