import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
const Profil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false); // State to control visibility of password

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data
        const userResponse = await axios.get(
          `http://localhost:8000/api/ecoactors/${id}/`
        );
        console.log(userResponse.data);
        setUserData(userResponse.data);

        // Fetch category names
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
  return (
    <main className="ml-60 pt-20 max-h-screen overflow-auto bg-gradient-to-b from-green-400 to-green-60">
      <div className="px-3 py-3">
        {" "}
        {/*justify-center*/}
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="bg-white overflow-hidden w-1/2 shadow rounded-lg border">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                {userData && userData.username}'s Profile
              </h3>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
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
                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
                    </div>

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
                  </>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profil;
