import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <>
      <nav className="footer__nav">
        <ul className="footer__nav-list" role="list">
          <li className="footer__nav-item" role="listitem">
            <Link to="/about" className="footer__nav-list-link">
              About
            </Link>
          </li>
          <li className="footer__nav-item" role="listitem">
            <Link to="/location" className="footer__nav-list-link">
              Location
            </Link>
          </li>
          <li className="footer__nav-item" role="listitem">
            <Link to="/careers" className="footer__nav-list-link">
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default FooterNav;
