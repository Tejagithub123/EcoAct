import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Main = () => {
  const [currentPage, setCurrentPage] = useState("plan");

  return (
    <div className="relative">
      <Header />
      <Sidebar setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default Main;
