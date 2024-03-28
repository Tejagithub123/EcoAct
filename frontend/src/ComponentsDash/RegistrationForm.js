import React, { useState, useEffect } from "react";

const RegistrationForm = () => {
  // State variables to store form data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [activitis, setActivitis] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    fetch("http://localhost:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    };
    // Perform POST request to backend API with formData
    fetch("http://localhost:8000/api/ecoactors/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success response as needed (e.g., show success message, redirect)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error response as needed (e.g., show error message)
      });
  };

  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <form
              className="font-[sans-serif] m-6 max-w-4xl mx-auto mt-20"
              onSubmit={handleSubmit}
            >
              {/* Username */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* Email */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* Password */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Telephone */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Phone No
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone no."
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />
              </div>
              {/* Address */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Enter address"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={adresse}
                  onChange={(e) => setAdresse(e.target.value)}
                />
              </div>
              {/* City */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  City
                </label>
                <select
                  id="ville"
                  value={ville}
                  onChange={(event) => setVille(event.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                >
                  <option value="">Select a city</option>
                  <option value="Tunis">Tunis</option>
                  <option value="Sfax">Sfax</option>
                  <option value="Sousse">Sousse</option>
                  <option value="Kairouan">Kairouan</option>
                  <option value="Bizerte">Bizerte</option>
                  <option value="Gabès">Gabès</option>
                  <option value="Ariana">Ariana</option>
                  <option value="Gafsa">Gafsa</option>
                  <option value="La Marsa">La Marsa</option>
                  <option value="Kasserine">Kasserine</option>
                  <option value="Mahdia">Mahdia</option>
                  <option value="Monastir">Monastir</option>
                  <option value="Béja">Béja</option>
                  <option value="Menzel Bourguiba">Menzel Bourguiba</option>
                  <option value="Djerba">Djerba</option>
                  <option value="Douz">Douz</option>
                  <option value="Hammamet">Hammamet</option>
                  <option value="Tozeur">Tozeur</option>
                  <option value="Kelibia">Kelibia</option>
                  <option value="Médenine">Médenine</option>
                  <option value="Nabeul">Nabeul</option>
                  <option value="Zaghouan">Zaghouan</option>
                  <option value="Jendouba">Jendouba</option>
                </select>
              </div>

              {/* Longitude */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Longitude
                </label>
                <input
                  type="number"
                  placeholder="Enter Longitude"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
              {/* Latitude */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Latitude
                </label>
                <input
                  type="number"
                  placeholder="Enter Latitude"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              {/* Activities */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Activities
                </label>
                <input
                  type="text"
                  placeholder="Enter activities"
                  className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  value={activitis}
                  onChange={(e) => setActivitis(e.target.value)}
                />
              </div>
              {console.log(categories)}
              {/* Categories */}
              <div className="relative flex items-center">
                <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                  Categories
                </label>
                {/* Category selection */}
                <select
                  multiple
                  value={selectedCategories}
                  onChange={(e) =>
                    setSelectedCategories(
                      Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      )
                    )
                  }
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
