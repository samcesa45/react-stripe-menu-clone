import React from "react";
import Navigation from "./component/Navigation";
import Sidebar from "./component/Sidebar";
import Hero from "./component/Hero";
import Submenu from "./component/Submenu";
const App = () => {
  return (
    <>
      <Navigation />
      <Sidebar />
      <Hero />
      <Submenu />
    </>
  );
};

export default App;
