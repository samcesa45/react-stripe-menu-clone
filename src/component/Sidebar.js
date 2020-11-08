import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { AppContext } from "../context";

const Sidebar = (props) => {
  const { isOpen, closeSideBar } = useContext(AppContext);
  return (
    <div className={`${isOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}  `}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { page, links } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <a href={url} key={index}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
