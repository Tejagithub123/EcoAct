import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MapWithMarker from "./MapWithMarker";
import imgs from "../img/elevated-view-businesspeople-hands-holding-paper-with-energy-saving-icons.jpg";
const RegistrationForm = ({ setCurrentPage }) => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [categoryNames, setCategoryNames] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = async () => {
    try {
      // Make the API call and wait for it to complete
      await axios.patch(`http://localhost:8000/api/ecoactors/${id}/`, {
        ...userData,
        categories: selectedCategories,
        Longitude: userData?.Longitude,
        Latitude: userData?.Latitude,
      });

      const updatedLongitude = userData?.Longitude;
      const updatedLatitude = userData?.Latitude;

      console.log("Updated Longitude:", updatedLongitude);
      console.log("Updated Latitude:", updatedLatitude);

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

  const handleMarkerDrag = (newCoordinates) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      Latitude: newCoordinates.lat,
      Longitude: newCoordinates.lng,
    }));
  };

  return (
    <main className="ml-60 pt-20 max-h-screen overflow-auto bg-gradient-to-b from-green-400 to-green-60">
      <div className="px-3 py-3">
        <div className="font-[sans-serif]">
          <div className="w-full h-60">
            <img
              src={imgs}
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
                <div className="w-1/3">
                  {/* Map */}
                  <MapWithMarker
                    initialCoordinates={{
                      lat: userData?.Latitude || 0,
                      lng: userData?.Longitude || 0,
                    }}
                    onMarkerDrag={handleMarkerDrag}
                  />
                </div>
                {/* Additional fields can be added here */}
              </form>
              {!isEdit ? (
                <div className="flex justify-center">
                  <button
                    onClick={handleEdit}
                    className="mt-4 w-1/6 px-6 py-2 bg-green-500 hover:bg-green-800 text-white rounded-full"
                  >
                    Edit Settings
                  </button>
                </div>
              ) : (
                <div className="flex justify-center">
                  <button
                    onClick={handleSave}
                    className="mt-4 w-1/9 px-6 py-2 mr-5 bg-green-500 hoover:bg-green-700 text-white rounded-full"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsEdit(false)}
                    className="mt-4 w-1/9 px-6 py-2  bg-red-600 hoover:bg-red-800 text-white-700 rounded-full"
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
