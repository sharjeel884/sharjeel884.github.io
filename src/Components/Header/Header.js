import "./Header.scss";
function Header() {
  return (
    <div className="header pt-3">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h1>SHARJEEL</h1>
          <div className="d-flex align-self-center">
            <div className="menu-btn">About</div>
            <div className="menu-btn">Resume</div>
            <div className="menu-btn">Portfolio</div>
            <div className="menu-btn">Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
