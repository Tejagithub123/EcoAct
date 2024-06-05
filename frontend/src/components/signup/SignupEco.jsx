import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../navbar/Navbar"; 
import Footer from "../footer/Footer";
import { useNavigate, Link } from "react-router-dom";
import imgsignin from "../../../src/img/recycling-concept-top-view.jpg"
const SignupEco =()=>{
  
      
  // State variables to store form data
  const TRASH_CHOICES = [
    { value: 'radioactive', label: 'Radioactive' },
    { value: 'organic', label: 'Organic' },
    { value: 'batteries', label: 'Batteries' },
    { value: 'light bulbs', label: 'Light Bulbs' },
    { value: 'biomedical', label: 'Biomedical' },
    { value: 'paper', label: 'Paper' },
    { value: 'metal', label: 'Metal' },
    { value: 'e-waste', label: 'E-Waste' },
    { value: 'glass', label: 'Glass' },
    { value: 'clothes', label: 'Clothes' },
    { value: 'plastic', label: 'Plastic' },
  ];
  
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [telephone, setTelephone] = useState("");
  const [telephoneError, setTelephoneError] = useState("");

  const [adresse, setAdresse] = useState("");
  const [adresseError, setAdresseError] = useState("");
  const [ville, setVille] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [longitudeError, setLongitudeError] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [latitudeError, setLatitudeError] = useState("");
  const [activitis, setActivitis] = useState("");
  const [trash, setTrash] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  useEffect(() => {
    fetchCategories();
  }, []);
  setTimeout(() => {
    setShowToast(false);
  }, 3000);
  const fetchCategories = () => {
    fetch("http://localhost:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
        // Regular expression patterns for validation
        const usernamePattern = /^[A-Z][a-zA-Z]{2,13}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
        // Validation checks
        if (!usernamePattern.test(username)) {
          setUsernameError("Username must start with a capital letter and be between 3 to 14 characters long");
          return;
        } else {
          setUsernameError("");
        }
    
        if (!emailPattern.test(email)) {
          setEmailError("Invalid email format");
          return;
        } else {
          setEmailError("");
        }
    
        if (!passwordPattern.test(password)) {
          setPasswordError("Password must be at least 6 characters long and contain both letters and numbers");
          return;
        } else {
          setPasswordError("");
        } 

        // Regular expression pattern for telephone validation
const telephonePattern = /^\d{8}$/;

// Validation check for telephone
if (!telephonePattern.test(telephone)) {
  setTelephoneError("Phone number must be exactly 8 digits");
  return;
} else {
  setTelephoneError("");
} 
if (latitude < 30 || latitude > 37.5) {
  setLatitudeError("Latitude must be between 30 and 37.5 degrees");
  return;
} else {
  setLatitudeError("");
}
// Validation check for longitude range
if (longitude < 7.5 || longitude > 11.5) {
  setLongitudeError("Longitude must be between 7.5 and 11.5 degrees");
  return;
} else {
  setLongitudeError("");
}


    // Construct the data object to be sent to the backend
    const formData = {
      username,
      email,
      password,
      telephone,
      adresse,
      ville,
      longitude,
      latitude,
      activitis,
      categories: selectedCategories,
      trash,
      
    };
    if (process.env.NODE_ENV !== 'production') {
        console.log("formData", formData);
      }
  
    // Perform POST request to backend API with formData
    axios
      .post("http://localhost:8000/api/ecoactors-candidats/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      }) 
      
      .then((response) => {
        console.log("Success:", response.data);
        setShowToast(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setShowToast2(true);
      });
  };

  return (
    <section className="h-full  bg-white gray:bg-neutral-700">
      <Navbar />
      <div className="flex flex-center">
      <div className="w-full h-full p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column container */}
          <div className="bg-white shadow-lg rounded-lg lg:col-span-1">
            <div className="px-6 py-12 md:px-12">
              <h1 className="text-3xl font-semibold text-center text-green-700 uppercase decoration-wavy">
                Sign Up
              </h1>
            <form
              className="font-[sans-serif] m-4 max-w-4xl mt-30"
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Username */}
                <div className="relative flex flex-col">
  <label className="text-[13px] text-black font-semibold">
    Username
  </label>
  <div className="flex items-center">
    <input
      type="text"
      placeholder="Enter username"
      className="flex-1 px-4 py-3.5 bg-white text-black text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
      required
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  {usernameError && (
    <p className="text-xs text-red-500 ml-2">{usernameError}</p>
  )}
</div>
         {/* Email */}
<div className="relative flex flex-col">
  <label className="text-[13px] text-black font-semibold">
    Email
  </label>
  <div className="flex items-center">
    <input
      type="email"
      placeholder="Enter email"
      className="flex-1 px-4 py-3.5 bg-white text-black text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
      value={email}
      required
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  {emailError && (
    <p className="text-xs text-red-500 ml-2">{emailError}</p>
  )}
</div>

{/* Password */}
<div className="relative flex flex-col">
  <label className="text-[13px] text-black font-semibold">
    Password
  </label>
  <div className="flex items-center">
    <input
      type="password"
      autoComplete="new-password"
      placeholder="Enter password"
      className="flex-1 px-4 py-3.5 bg-white text-black text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
      value={password}
      required
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  {passwordError && (
    <p className="text-xs text-red-500 ml-2">{passwordError}</p>
  )}
</div>
               {/* Telephone */}
<div className="relative flex flex-col">
  <label className="text-[13px] text-black font-semibold">
    Phone No
  </label>
  <div className="flex items-center">
    <input
      type="number"
      placeholder="Enter phone no."
      className="flex-1 px-4 py-3.5 bg-white text-black text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
      value={telephone}
      required
      onChange={(e) => setTelephone(e.target.value)}
    />
  </div>
  {telephoneError && (
    <p className="text-xs text-red-500 ml-2">{telephoneError}</p>
  )}
</div>
                {/* Address */}
                <div className="relative flex items-center">
                  <label className="text-[13px]      text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
                    value={adresse}
                    required
                    onChange={(e) => setAdresse(e.target.value)}
                  />
                </div>
                {/* City */}
                <div className="relative flex items-center">
                  <label className="text-[13px]      text-black absolute px-2 top-[-12px] left-[1px] font-semibold">
                    City
                  </label>
                  <select
                    id="ville"
                    value={ville}
                    required
                    onChange={(event) => setVille(event.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
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
                    {/* Add other city options here */}
                  </select>
                </div>
                {/* Longitude */}
       
                <div className="relative flex flex-col">
  <label className="text-[13px] text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
    Longitude
  </label>
  <input
    type="number"
    placeholder="Enter Longitude"
    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
    value={longitude}
    required
    onChange={(e) => setLongitude(e.target.value)}
  />
  {longitudeError && (
    <p className="text-xs text-red-500 ml-2">{longitudeError}</p>
  )}
</div>
                {/* Latitude */}
                <div className="relative flex flex-col">
  <label className="text-[13px] text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
    Latitude
  </label>
  <input
    type="number"
    placeholder="Enter Latitude"
    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
    value={latitude}
    required
    onChange={(e) => setLatitude(e.target.value)}
  />
  {latitudeError && (
    <p className="text-xs text-red-500 ml-2">{latitudeError}</p>
  )}
</div>
                {/* Activities */}
                <div className="relative flex items-center">
                  <label className="text-[13px]      text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
                    Activities
                  </label>
                  <input
                    type="text"
                    placeholder="Enter activities"
                    required
                    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
                    value={activitis}
                    onChange={(e) => setActivitis(e.target.value)}
                  />
                </div>


                <div className="relative flex items-center">
      <label className="text-[13px] text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
        Trash
      </label>
      <select
        className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
        value={trash}
        onChange={(e) => setTrash(e.target.value)}
      >
        <option value="">Select trash type</option>
        {TRASH_CHOICES.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </div>

{/* Categories */}
{/* Categories */}
<div className="relative flex items-center">
  <label className="text-[13px] text-black absolute px-2 top-[-18px] left-[1px] font-semibold">
    Categories
  </label>
  <select
    value={selectedCategories}
    onChange={(e) => {
      setSelectedCategories(
        Array.from(
          e.target.selectedOptions,
          (option) => option.value
        )
      );
    }}
    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-green-500 rounded outline-none"
  >
    <option disabled={true}>Select a Category</option>
    {categories.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
  </select>
</div>


                {/* Submit Button */}
                <div className="mt-6 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
                  >
                    Sign up
                  </button>
                  
                </div>
          
              </div>
            </form>{" "}
            {showToast  && (
              
              <div class="bg-green-100 mt-10 text-green-800 px-4 py-4 rounded" role="alert">
              <strong class="font-bold text-base mr-4">Success!</strong>
              <span class="block text-sm sm:inline max-sm:mt-1">Sign up succesfuly.</span>
            </div>
            )}

{showToast2  && (
              
              <div class="bg-red-300 mt-10 text-red-800 px-4 py-4 rounded" role="alert">
              <strong class="font-bold text-base mr-4">Fail!</strong>
              <span class="block text-sm sm:inline max-sm:mt-1">verify your credentials </span>
            </div>
            )}
            <p className="mt-8 text-xl font-light text-center text-black">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-xl font-medium text-green-300 hover:underline"
                >
                  Sign in
                </Link>
              </p>
          </div>
          
        </div> 
        
        {/* Right column container with background image */}
        <div
            className="hidden md:block bg-cover bg-center rounded-lg lg:col-span-1 lg:rounded-l-lg lg:rounded-br-none"
            style={{
              backgroundImage: `url(${imgsignin})`,
            }}
          ></div>
          
      </div>
      
      </div>
      
      </div>
      
      <Footer />
    </section>
  );
};

export default SignupEco;
