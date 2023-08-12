import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="header__nav" aria-label="main">
        <button
          className="header__nav-toggle"
          aria-expanded="false"
          aria-controls="header__nav-menu-list"
          aria-label="menu"
        >
          <span className="header__nav-toggle-line" />
          <span className="header__nav-toggle-line" />
          <span className="header__nav-toggle-line" />
        </button>
        <div className="header__nav-menu">
          <ul className="header__nav-menu-list" role="list">
            <li className="header__nav-menu-item" role="listitem">
              <Link to="/about" className="header__nav-menu-link">
                About
              </Link>
            </li>
            <li className="header__nav-menu-item" role="listitem">
              <Link to="/locations" className="header__nav-menu-link">
                Location
              </Link>
            </li>
            <li className="header__nav-menu-item" role="listitem">
              <Link to="/careers" className="header__nav-menu-link">
                Careers
              </Link>
            </li>
          </ul>
          <a href="" className="header__nav-menu-btn button">
            Get Scootin
          </a>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
