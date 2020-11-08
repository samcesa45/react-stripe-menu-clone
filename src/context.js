import React, { useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [isSubmenuOpen, setSubMenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSideBar = () => {
    setOpen(true);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setSubMenuOpen(true);
    setLocation(coordinates);
    setSubMenuOpen(true);
  };

  const closeSubmenu = () => {
    setSubMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isOpen,
        openSideBar,
        closeSideBar,
        openSubmenu,
        page,
        location,
        isSubmenuOpen,
        closeSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
