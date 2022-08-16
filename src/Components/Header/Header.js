import "./Header.scss"
function Header() {

    return (
      <div className="header">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>Sharjeel</h1>
            <div className="menu">
                <ul>
                  <li>Home</li>
                  <li>About </li>
                  <li>Services</li>
                  <li>Portfolio</li>
                  <li>Contact</li>

                </ul>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Header;
  