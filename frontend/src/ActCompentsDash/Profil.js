import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const Profil = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

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

  return (
    <main className="ml-60 pt-20 max-h-screen overflow-auto bg-gradient-to-b from-green-400 to-green-60">
      <div className="px-3 py-3">
        <div className="font-[sans-serif]">
          <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
            <img
              src="https://readymadeui.com/cardImg.webp"
              alt="Banner Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="-mt-28 mb-6 px-4">
            <div className="mx-auto max-w-6xl shadow-lg py-8 px-6 relative bg-white rounded">
              <h2 className="text-xl text-[#333] font-bold">
                {userData?.username}'s Profile
              </h2>
              <form className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-semibold text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="w-full rounded py-2.5 px-4 mt-2 border-2 text-sm outline-[#007bff]"
                    value={userData?.username || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.email || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.telephone || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.adresse || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Activities</label>
                  <input
                    type="text"
                    placeholder="Activities"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.activitis || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.ville || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Longitude</label>
                  <input
                    type="number"
                    placeholder="Longitude"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.longitude || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Latitude</label>
                  <input
                    type="number"
                    placeholder="Latitude"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.latitude || ""}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Password</label>
                  <div className="flex items-center">
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
                    {showPassword
                      ? userData?.password
                      : userData?.password.replace(/./g, "*")}
                  </div>
                </div>
                <div>
                  <label className="font-semibold text-sm">Categories</label>
                  <div>
                    {userData?.categories.map((categoryId) => (
                      <span key={categoryId}>
                        {
                          categoryNames.find(
                            (category) => category.id === categoryId
                          )?.name
                        }
                      </span>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profil;
