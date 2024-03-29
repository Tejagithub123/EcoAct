import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import CoordinateModal from "./CoordinateModal";
const RegistrationForm = ({ setCurrentPage }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isCoordinateModalOpen, setIsCoordinateModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:8000/api/ecoactors/${id}/`
        );
        console.log(userResponse.data);
        setUserData(userResponse.data);

        const categoryResponse = await axios.get(
          `http://localhost:8000/api/categories/`
        );
        setCategoryNames(categoryResponse.data);
        setSelectedCategories(userResponse.data.categories || []);
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
      await axios.put(`http://localhost:8000/api/ecoactors/${id}/`, {
        ...userData,
        categories: selectedCategories,
      });
      setIsEdit(false);
      setCurrentPage("Profil");
      console.log("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setSelectedCategories(selectedOptions);
  };

  const handleMapModal = () => {
    setIsCoordinateModalOpen(true); // Open the coordinate modal
  };

  const handleCoordinateModalClose = () => {
    setIsCoordinateModalOpen(false); // Close the coordinate modal
  };

  const handleSaveCoordinates = async (newCoordinates) => {
    try {
      // Make API call to save the new coordinates
      await axios.patch(`http://localhost:8000/api/ecoactors/${id}/`, {
        ...userData,
        longitude: newCoordinates.lng,
        latitude: newCoordinates.lat,
      });
      setUserData((prevUserData) => ({
        ...prevUserData,
        longitude: newCoordinates.lng,
        latitude: newCoordinates.lat,
      }));
      console.log("Coordinates updated successfully!");
    } catch (error) {
      console.error("Error updating coordinates:", error);
    }
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
                Edit {userData?.username}'s Profile
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
                    value={userData?.adresse || ""}
                    name="adresse"
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
                    value={userData?.ville || ""}
                    name="ville"
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
                    value={selectedCategories}
                    name="categories"
                    multiple
                    readOnly={!isEdit}
                    onChange={handleCategoryChange}
                  >
                    {categoryNames.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-sm">Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                    value={userData?.password || ""}
                    name="password"
                    readOnly={!isEdit}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleMapModal}
                    className="mt-4 w-1/4 px-6 py-2 bg-gray-400 hover:bg-gray-600 text-white rounded-full"
                  >
                    Modify Coordinates
                  </button>
                </div>
                {/* Additional fields can be added here */}
              </form>
              {!isEdit ? (
                <div className="flex justify-center">
                  <button
                    onClick={handleEdit}
                    className="mt-4 w-1/4 px-6 py-2 bg-blue-500 hover:bg-blue-800 text-white rounded-full"
                  >
                    Edit Settings
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={handleSave}
                    className="mt-4 w-1/6 px-6 py-2 mr-10 bg-green-600 hoover:bg-green-800 text-white rounded-full"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEdit(false)}
                    className="mt-4 w-1/6 px-6 py-2  bg-red-600 hoover:bg-red-800 text-white-700 rounded-full"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isCoordinateModalOpen && (
        <CoordinateModal
          onClose={handleCoordinateModalClose}
          onSave={handleSaveCoordinates}
          initialCoordinates={{
            lat: userData?.latitude || 0,
            lng: userData?.longitude || 0,
          }}
        />
      )}
    </main>
  );
};

export default RegistrationForm;
