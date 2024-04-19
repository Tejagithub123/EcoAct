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
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  // State variables for input validation errors
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [telephoneError, setTelephoneError] = useState("");
  const [latitudeError, setLatitudeError] = useState("");
  const [longitudeError, setLongitudeError] = useState("");

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
    // Perform validation before saving
    if (!validateInput()) {
      return;
    }

    try {
      await axios.patch(`http://localhost:8000/api/ecoactors/${id}/`, {
        ...userData,
        categories: selectedCategories,
        Longitude: longitude,
        Latitude: latitude,
      });
      console.log("User", userData);
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

    // Clear previous validation errors when input changes
    clearErrors();

    // Perform validation based on the input name
    switch (name) {
      case "username":
        if (!validateUsername(value)) {
          setUsernameError(
            "Username must start with a capital letter and be between 3 to 14 characters long"
          );
        }
        break;
      case "email":
        if (!validateEmail(value)) {
          setEmailError("Invalid email format");
        }
        break;
      case "password":
        if (!validatePassword(value)) {
          setPasswordError(
            "Password must be at least 6 characters long and contain both letters and numbers"
          );
        }
        break;
      case "telephone":
        if (!validateTelephone(value)) {
          setTelephoneError("Phone number must be exactly 8 digits");
        }
        break;
      default:
        break;
    }
  };

  const validateInput = () => {
    // Validate all input fields
    const isValidUsername = validateUsername(userData.username);
    const isValidEmail = validateEmail(userData.email);
    const isValidPassword = validatePassword(userData.password);
    const isValidTelephone = validateTelephone(userData.telephone);
    const isValidLatitude = validateLatitude(userData.latitude);
    const isValidLongitude = validateLongitude(userData.longitude);

    // Clear previous validation errors when fields are valid
    if (isValidUsername) {
      setUsernameError("");
    }
    if (isValidEmail) {
      setEmailError("");
    }
    if (isValidPassword) {
      setPasswordError("");
    }
    if (isValidTelephone) {
      setTelephoneError("");
    }
    if (isValidLatitude) {
      setLatitudeError("");
    }
    if (isValidLongitude) {
      setLongitudeError("");
    }

    // Set errors for invalid inputs
    if (!isValidUsername) {
      setUsernameError(
        "Username must start with a capital letter and be between 3 to 14 characters long"
      );
    }
    if (!isValidEmail) {
      setEmailError("Invalid email format");
    }
    if (!isValidPassword) {
      setPasswordError(
        "Password must be at least 6 characters long and contain both letters and numbers"
      );
    }
    if (!isValidTelephone) {
      setTelephoneError("Phone number must be exactly 8 digits");
    }
    if (!isValidLatitude) {
      setLatitudeError("Latitude must be between 30 and 37.5 degrees");
    }
    if (!isValidLongitude) {
      setLongitudeError("Longitude must be between 7.5 and 11.5 degrees");
    }
    // Log the validation results
    console.log("Validation Results:");
    console.log("isValidUsername:", isValidUsername);
    console.log("isValidEmail:", isValidEmail);

    console.log("isValidTelephone:", isValidTelephone);
    console.log("isValidLatitude:", isValidLatitude);
    console.log("isValidLongitude:", isValidLongitude);
    // Return overall validation result
    const isValid =
      isValidUsername &&
      isValidEmail &&
      isValidTelephone &&
      isValidLatitude &&
      isValidLongitude;
    console.log("isValid:", isValid);
    return isValid;
  };

  const validateUsername = (username) => {
    const usernamePattern = /^[A-Z][a-zA-Z]{2,13}$/;
    return usernamePattern.test(username);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    return passwordPattern.test(password);
  };

  const validateTelephone = (telephone) => {
    const telephonePattern = /^\d{8}$/;
    return telephonePattern.test(telephone);
  };

  const validateLatitude = (latitude) => {
    return latitude >= 30 && latitude <= 37.5;
  };

  const validateLongitude = (longitude) => {
    return longitude >= 7.5 && longitude <= 11.5;
  };

  const clearErrors = () => {
    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setTelephoneError("");
    setLatitudeError("");
    setLongitudeError("");
  };

  const handleCategoryChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) =>
      parseInt(option.value)
    );
    setSelectedCategories(selectedOptions);
  };

  const handleMarkerDrag = (newCoordinates) => {
    setLatitude(newCoordinates.lat);
    setLongitude(newCoordinates.lng);
    setUserData((prevUserData) => ({
      ...prevUserData,
      latitude: newCoordinates.lat,
      longitude: newCoordinates.lng,
    }));
    console.log("newCoordinates", newCoordinates);
  };

  return (
    <main
      className="ml-60 pt-20 max-h-screen overflow-auto"
      style={{
        backgroundImage: `url(${imgs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-3 py-3">
        <div className="font-[sans-serif]">
          <div className="w-full h-60">{/* This is your banner image */}</div>
          <div className="-mt-28 mb-6 px-4">
            <div className="mx-auto max-w-6xl shadow-lg py-8 px-6 relative bg-white rounded">
              <h2 className="text-xl text-[#333] font-bold">
                Edit {userData?.username}'s Profile
              </h2>
              <div className="sticky">
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
                    {usernameError && (
                      <p className="text-red-500">{usernameError}</p>
                    )}
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
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                  <div>
                    <label className="font-semibold text-sm">Telephone</label>
                    <input
                      type="number"
                      placeholder="Telephone"
                      className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                      value={userData?.telephone || ""}
                      name="telephone"
                      readOnly={!isEdit}
                      onChange={handleChange}
                    />
                    {telephoneError && (
                      <p className="text-red-500">{telephoneError}</p>
                    )}
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
                    <select
                      className="w-full rounded py-2.5 px-4 border-2 mt-2 text-sm outline-[#007bff]"
                      value={userData?.ville || ""}
                      name="ville"
                      readOnly={!isEdit}
                      onChange={handleChange}
                    >
                      <option value="">Select a city</option>
                      <option value="Ariana">Ariana</option>
                      <option value="Beja">Beja</option>
                      <option value="Ben Arous">Ben Arous</option>
                      <option value="Bizerte">Bizerte</option>
                      <option value="Gabes">Gabes</option>
                      <option value="Gafsa">Gafsa</option>
                      <option value="Jendouba">Jendouba</option>
                      <option value="Kairouan">Kairouan</option>
                      <option value="Kasserine">Kasserine</option>
                      <option value="Kebili">Kebili</option>
                      <option value="Kef">Kef</option>
                      <option value="Mahdia">Mahdia</option>
                      <option value="Manouba">Manouba</option>
                      <option value="Medenine">Medenine</option>
                      <option value="Monastir">Monastir</option>
                      <option value="Nabeul">Nabeul</option>
                      <option value="Sfax">Sfax</option>
                      <option value="Sidi Bouzid">Sidi Bouzid</option>
                      <option value="Siliana">Siliana</option>
                      <option value="Sousse">Sousse</option>
                      <option value="Tataouine">Tataouine</option>
                      <option value="Tozeur">Tozeur</option>
                      <option value="Tunis">Tunis</option>
                      <option value="Zaghouan">Zaghouan</option>
                    </select>
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
                  <br></br>
                  <div className="w-1/3">
                    {/* Map */}
                    <MapWithMarker
                      initialCoordinates={{
                        lat: latitude || (userData && userData.latitude) || 0,
                        lng: longitude || (userData && userData.longitude) || 0,
                      }}
                      onMarkerDrag={handleMarkerDrag}
                    />
                  </div>
                  {/* Additional fields can be added here */}
                </form>
              </div>
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
