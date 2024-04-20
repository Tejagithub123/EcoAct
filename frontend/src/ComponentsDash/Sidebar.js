import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaHome,
  FaUserCircle,
  FaChartLine,
  FaCalendarAlt,
  FaUser,
  FaUsers,
  FaPlus,
  FaQuestionCircle,
  FaTasks,
} from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

const Sidebar = ({ setCurrentPage }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
    localStorage.removeItem("token");
  };

  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <nav className="bg-[#09090a] shadow-lg h-screen fixed top-0 left-0 min-w-[250px] py-6 px-6 font-[sans-serif] flex flex-col overflow-auto z-20">
      <div className="flex flex-wrap items-center cursor-pointer">
        <div className="flex flex-wrap items-center cursor-pointer">
          <div className="relative">
            <FaUserCircle className="w-12 h-12 text-gray-500" />{" "}
            {/* Example usage of FontAwesome icon */}
            <span className="h-3 w-3 rounded-full bg-green-600 border-2 border-white block absolute bottom-0 right-0"></span>
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>
      </div>
      <br></br>

      <ul className="space-y-10 flex-1 mt-4 mb-10">
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("plan")}
          >
            <FaChartLine className="w-[18px] h-[18px] mr-4" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("Information")}
          >
            <FaCalendarAlt className="w-[18px] h-[18px] mr-4" />
            <span>Events</span>
          </a>
        </li>
        {/* <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("Profil")}
          >
            <FaUser className="w-[18px] h-[18px] mr-4" />
            <span>Profil</span>
          </a>
        </li> */}
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("RegistrationForm")}
          >
            <FaPlus className="w-[18px] h-[18px] mr-4" />
            <span>Add actor</span>
          </a>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("Consult")}
          >
            <FaUsers className="w-[18px] h-[18px] mr-4" />
            <span>Eco Actors</span>
          </a>
        </li>
        {/* <ul>
          <li>
            <a
              href="javascript:void(0)"
              className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
              onClick={() => handleItemClick("Prediciton")}
            >
              <FaRecycle className="w-[18px] h-[18px] mr-4" />
              <span>Prediciton</span>
            </a>
          </li>
        </ul> */}
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("Category")}
          >
            <FaTasks className="w-[18px] h-[18px] mr-4" />
            <span>categories</span>
          </a>
        </li>

        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={() => handleItemClick("Confirm")}
          >
            <FaQuestionCircle className="w-[18px] h-[18px] mr-4" />
            <span>requests</span>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <Link
            to="/"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
          >
            <FaHome className="w-[18px] h-[18px] mr-4" /> <span>Home</span>
          </Link>
          <br></br>
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-gray-300 hover:text-white text-sm flex items-center rounded-md"
            onClick={handleLogoutClick}
          >
            <FaUser className="w-[18px] h-[18px] mr-4" />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
