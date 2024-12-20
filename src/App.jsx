import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/navBar";
import Footer from "./components/footer";
const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
