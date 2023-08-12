import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navMenuRef = useRef();
  const navToggleRef = useRef();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    function handleClickOutside(event) {
      if (
        navMenuRef.current &&
        !navMenuRef.current.contains(event.target) &&
        event.target !== navToggleRef.current
      ) {
        closeNav();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleNav = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
    if (!isNavExpanded) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const closeNav = () => {
    setIsNavExpanded(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleFocusOut = (event) => {
    if (!navMenuRef.current.contains(event.relatedTarget)) {
      closeNav();
    }
  };

  return (
    <nav className="header__nav" aria-label="main">
      <button
        className="header__nav-toggle"
        ref={navToggleRef}
        aria-expanded={isNavExpanded}
        aria-controls="header__nav-menu-list"
        aria-label="menu"
        onClick={toggleNav}
      >
        <span className="header__nav-toggle-line" />
        <span className="header__nav-toggle-line" />
        <span className="header__nav-toggle-line" />
      </button>

      <div
        className={`header__nav-menu ${isNavExpanded ? "expanded" : ""}`}
        ref={navMenuRef}
        onBlur={handleFocusOut}
      >
        <ul className="header__nav-menu-list" role="list">
          <li className="header__nav-menu-item" role="listitem">
            <Link to="/about" className="header__nav-menu-link">
              About
            </Link>
          </li>
          <li className="header__nav-menu-item" role="listitem">
            <Link to="/locations" className="header__nav-menu-link">
              Locations
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
  );
}

export default NavBar;
