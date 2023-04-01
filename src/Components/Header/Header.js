import "./Header.scss";
function Header({ active, setActive }) {
  return (
    <div className="header pt-3">
      <div className="container">
        <div className="d-flex justify-content-between flex-md-row flex-column ">
          <h1>SHARJEEL</h1>
          <div className="d-flex align-self-center mobile-header">
            <div
              onClick={() => {
                document.getElementById("about-section").scrollIntoView({ behavior: "smooth", block: "center" });
                setActive(1);
              }}
              className={`menu-btn ${active === 1 ? "active" : ""}`}
            >
              About
            </div>
            <div
              onClick={() => {
                document.getElementById("resume-section").scrollIntoView({ behavior: "smooth", block: "start" });
                setActive(2);
              }}
              className={`menu-btn ${active === 2 ? "active" : ""}`}
            >
              Resume
            </div>
            <div
              onClick={() => {
                document.getElementById("portfolio-section").scrollIntoView({ behavior: "smooth", block: "start" });
                setActive(3);
              }}
              className={`menu-btn ${active === 3 ? "active" : ""}`}
            >
              Portfolio
            </div>
            <div
              onClick={() => {
                document.getElementById("contact-section").scrollIntoView({ behavior: "smooth", block: "center" });
                setActive(4);
              }}
              className={`menu-btn ${active === 4 ? "active" : ""}`}
            >
              Contact
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
