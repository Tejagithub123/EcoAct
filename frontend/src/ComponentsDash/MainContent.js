import React from "react";
import Consult from "./Consult";
import Content from "./Content";
import Information from "./Information";
import Profil from "./Profil";
import Categoryform from "./Categoryform";
import RegistrationForm from "./RegistrationForm";
import Prediction from "./wastevideo/Prediction";
import Confirm from "./Confirm";
const MainContent = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      {currentPage === "plan" && (
        <div>
          <Content></Content>
        </div>
      )}
      {currentPage === "Profil" && (
        <div>
          <Profil></Profil>
        </div>
      )}

      {currentPage === "Information" && (
        <div>
          <Information></Information>
        </div>
      )}

      {currentPage === "RegistrationForm" && (
        <div>
          <RegistrationForm setCurrentPage={setCurrentPage} />
        </div>
      )}

      {currentPage === "Consult" && (
        <div>
          <Consult />
        </div>
      )}

      {currentPage === "Category" && (
        <div>
          <Categoryform />
        </div>
      )}

      {currentPage === "Prediciton" && (
        <div>
          <Prediction />
        </div>
      )}
      {currentPage === "Confirm" && (
        <div>
          <Confirm setCurrentPage={setCurrentPage} />
        </div>
      )}

      {/* Add more conditional content based on other pages */}
    </div>
  );
};

export default MainContent;
