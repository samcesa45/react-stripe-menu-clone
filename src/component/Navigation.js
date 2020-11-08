import React, { useContext } from "react";
import logo from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import { AppContext } from "../context";
const Navigation = (props) => {
  const { openSideBar, closeSubmenu, openSubmenu } = useContext(AppContext);

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const bottom = tempBtn.bottom - 3;
    const center = (tempBtn.left + tempBtn.right) / 2;
    openSubmenu(page, { bottom, center });
  };

  const handleSubmit = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  };

  return (
    <nav className="nav" onMouseOver={handleSubmit}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="stripe-logo" />
          <button className="btn toggle-btn" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          <button className="link-btn" onMouseOver={displaySubmenu}>
            products
          </button>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            developers
          </button>
          <button className="link-btn" onMouseOver={displaySubmenu}>
            company
          </button>
        </ul>
        <button className="btn sign_up_btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navigation;
