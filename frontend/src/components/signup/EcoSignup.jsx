import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import imgsignin from "../../../src/img/engineer-plan-ecology-with-copy-space.jpg";

const EcoSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [activitis, setActivitis] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/ecoactors/", {
        username,
        email,
        telephone,
        adresse,
        ville,
        longitude,
        latitude,
        activitis,
      });
      console.log(response.data);
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        console.error("Signup failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  
  return (
    <section className="h-full bg-white gray:bg-neutral-700">
      <Navbar />
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-100">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <h1 className="text-3xl font-semibold text-center text-green-700 uppercase decoration-wavy">
                      Sign Up
                    </h1>
                    <form className="mt-6" onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          htmlFor="username"
                          className="block text-xl font-semibold text-black"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          value={username}
                          onChange={(event) => setUsername(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="email"
                          className="block text-xl font-semibold text-black"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                     
                      <div className="mb-2">
                        <label
                          htmlFor="telephone"
                          className="block text-xl font-semibold text-black"
                        >
                          Telephone
                        </label>
                        <input
                          type="text"
                          id="telephone"
                          value={telephone}
                          onChange={(event) => setTelephone(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                     
                      <div className="mb-2">
                        <label
                          htmlFor="adresse"
                          className="block text-xl font-semibold text-black"
                        >
                          Adresse
                        </label>
                        <input
                          type="text"
                          id="adresse"
                          value={adresse}
                          onChange={(event) => setAdresse(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                      <div className="mb-2">
  <label
    htmlFor="ville"
    className="block text-xl font-semibold text-black"
  >
    City
  </label>
  <select
    id="ville"
    value={ville}
    onChange={(event) => setVille(event.target.value)}
    className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
    required
  >
    <option value="">Select a ville</option>
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
    {/* Ajoutez d'autres options au besoin */}
  </select>
</div>

                      <div className="mb-2">
                        <label
                          htmlFor="longitude"
                          className="block text-xl font-semibold text-black"
                        >
                          Longitude
                        </label>
                        <input
                          type="text"
                          id="longitude"
                          value={longitude}
                          onChange={(event) => setLongitude(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="latitude"
                          className="block text-xl font-semibold text-black"
                        >
                          Latitude
                        </label>
                        <input
                          type="text"
                          id="latitude"
                          value={latitude}
                          onChange={(event) => setLatitude(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="activitis"
                          className="block text-xl font-semibold text-black"
                        >
                          activitis
                        </label>
                        <input
                          type="text"
                          id="activitis"
                          value={activitis}
                          onChange={(event) => setActivitis(event.target.value)}
                          className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opaville-40"
                          required
                        />
                      </div>
                      {/* Removed category selection */}
                      <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-400 text-xl">
                          Sign up
                        </button>
                      </div>
                    </form>
                    <p className="mt-8 text-xl font-light text-center text-black">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-xl font-medium text-green-300 hover:underline"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-center rounded lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    backgroundImage: `url(${imgsignin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    {/* Content inside the right column container */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
};

export default EcoSignup;
