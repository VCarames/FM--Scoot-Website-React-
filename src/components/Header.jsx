import Logo from "/logo.svg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <Link to="/" className="header__logo" aria-label="Home - Scoot">
            <img src={Logo} alt="" />
          </Link>

          <NavBar />
        </div>
      </header>
    </>
  );
}

export default Header;
