import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context";
const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useContext(AppContext);
  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label } = link;
            return (
              <a href={url} alt="" key={index}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
