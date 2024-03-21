import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Main = () => {
  const [currentPage, setCurrentPage] = useState(null);
  return (
    <div className="relative bg-yellow-50 overflow-hidden max-h-screen">
      <Header />
      <Sidebar setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
    </div>
  );
};

export default Main;
