import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  RiEyeFill,
  RiEyeOffFill,
  RiSettings3Line,
  RiDeleteBinLine,
} from "react-icons/ri";

import { FaTrash, FaEdit, FaTimesCircle, FaCheck } from "react-icons/fa";

const Profil = ({ setCurrentPage }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // State to control visibility of password

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleSettingsClick = () => {
    setCurrentPage("RegistrationForm");
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/ecoactors/${id}/`
        );
        setUserData(userResponse.data);

        const categoryResponse = await axios.get(
          `http://localhost:8000/api/categories/`
        );
        setCategoryNames(categoryResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserData();
  }, [id]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true); // Show delete confirmation modal
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false); // Hide delete confirmation modal
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/ecoactors/${id}/`);
      console.log("User deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    setShowDeleteModal(false); // Hide modal after deletion
  };
  return (
    <div
      class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10"
      style={{
        backgroundImage:
          "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')",
      }}
    >
      <main className="ml-60 pt-1 max-h-screen">
        <div className="px-3 py-3">
          {" "}
          {/*justify-center*/}
          <div className="max-w-4xl mx-auto flex justify-center">
            <div className="bg-white overflow-hidden w-8/12 shadow rounded-lg border">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                  {userData && userData.username}'s Profile
                </h3>

                <div className="flex justify-end space-x-4">
                  <FaEdit
                    className="text-blue-600 cursor-pointer text-2xl"
                    onClick={handleSettingsClick}
                    title="Update"
                  />
                  <FaTrash
                    className="text-red-600 cursor-pointer text-2xl"
                    onClick={handleDeleteClick}
                    title=""
                  />
                </div>
              </div>

              <div className="border-t   border-gray-200 px-4 py-5 sm:p-0">
                <dl className="sm:divide-y sm:divide-gray-200">
                  {userData && (
                    <>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Name
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.username}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Email address
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.email}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Phone number
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.telephone}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Address
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.adresse}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Activities
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.activitis}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          City
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.ville}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Longitude
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.longitude}
                        </dd>
                      </div>
                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Latitude
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.latitude}
                        </dd>
                      </div>
                      {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Password
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2 flex items-center">
                          {showPassword ? (
                            <RiEyeOffFill
                              className="mr-2 cursor-pointer"
                              onClick={togglePasswordVisibility}
                            />
                          ) : (
                            <RiEyeFill
                              className="mr-2 cursor-pointer"
                              onClick={togglePasswordVisibility}
                            />
                          )}
                          {showPassword ? (
                            userData.password
                          ) : (
                            <>{userData.password.replace(/./g, "*")}</>
                          )}
                        </dd>
                      </div> */}

                      <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-lg font-medium text-gray-500">
                          Categories
                        </dt>
                        <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                          {userData.categories.map((categoryId) => (
                            <span key={categoryId}>
                              {
                                categoryNames.find(
                                  (category) => category.id === categoryId
                                )?.name
                              }
                            </span>
                          ))}
                        </dd>
                      </div>

                      {showDeleteModal && (
                        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                          <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
                            {/* Delete Icon */}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 cursor-pointer absolute top-2 right-2 fill-black hover:fill-red-500"
                              viewBox="0 0 320.591 320.591"
                              onClick={handleCancelDelete}
                            >
                              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                            </svg>
                            <div className="my-8 text-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-16 fill-red-500 inline"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
                                <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" />
                              </svg>
                              <h4 className="text-lg font-semibold mt-6">
                                Are you sure you no longer want to be an
                                environmental actor?
                              </h4>
                            </div>
                            <div className="text-center space-x-4">
                              <button
                                type="button"
                                className="px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
                                onClick={handleCancelDelete}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className="px-6 py-2.5 rounded-md text-white text-sm font-semibold border-none outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
                                onClick={handleConfirmDelete}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profil;
