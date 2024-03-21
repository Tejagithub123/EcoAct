import React from "react";
import Content from "./Content";
import Information from "./Information";
import Profil from "./Profil";

const MainContent = ({ currentPage }) => {
  return (
    <div>
      {currentPage === "plan" && (
        <div>
          <Content></Content>
        </div>
      )}
      {currentPage === "taskList" && (
        <div>
          <Profil></Profil>
        </div>
      )}

      {currentPage === "Information" && (
        <div>
          <Information></Information>
        </div>
      )}

      {/* Add more conditional content based on other pages */}
    </div>
  );
};

export default MainContent;
