import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

const RegistrationForm = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

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

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8000/api/ecoactors/${id}/`, userData);
      setIsEdit(false);
      console.log("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
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
                    name="username"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.email || ""}
                    name="email"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Telephone</label>
                  <input
                    type="tel"
                    placeholder="Telephone"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.telephone || ""}
                    name="telephone"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.address || ""}
                    name="address"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">City</label>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.city || ""}
                    name="city"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Activities</label>
                  <input
                    type="text"
                    placeholder="Activities"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.activitis || ""}
                    name="activitis"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="font-semibold text-sm">Categories</label>
                  <select
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.categories || []}
                    name="categories"
                    multiple
                    readOnly={!isEdit}
                    onChange={handleChange}
                  >
                    {categoryNames.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Add more fields as needed */}
              </form>
              {!isEdit ? (
                <button
                  onClick={handleEdit}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full"
                >
                  Edit
                </button>
              ) : (
                <div className="flex">
                  <button
                    onClick={handleSave}
                    className="mt-4 mr-2 px-6 py-2 bg-blue-600 text-white rounded-full"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEdit(false)}
                    className="mt-4 px-6 py-2 bg-gray-300 text-gray-700 rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
