import { Link } from "react-router-dom";
import FooterNav from "./FooterNav";
import FooterSocial from "./FooterSocial";
import Logo from "/logo-light.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__info">
            <Link className="footer__logo" aria-label="Home - Scoot">
              <img src={Logo} alt="" />
            </Link>

            <FooterNav />
          </div>
          <FooterSocial />
        </div>
      </footer>
    </>
  );
}

export default Footer;
