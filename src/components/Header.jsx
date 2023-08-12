import React, { useState, useEffect } from "react";
import Logo from "/logo.svg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
