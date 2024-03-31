import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import EcologyChallenges from "../Featuredesign/EcologyChallenges";
import WebsiteFAQSection from "../Featuredesign/WebsiteFAQSection";
const EcoMap = () => {
  const [selectedActor, setSelectedActor] = useState(null);
  const [ecoActor, setEcoActor] = useState([]);
  const [searchCity, setSearchCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    // Fetch EcoActors
    if (searchCity.trim() === "" || selectedCategory.trim() === "") {
      axios
        .get("http://localhost:8000/api/ecoactors/")
        .then((response) => {
          console.log(response.data);
          setEcoActor(response.data);
        })
        .catch((error) => {
          console.error("Error fetching ecoactors:", error);
        });
    }
  }, [searchCity, selectedCategory]);

  useEffect(() => {
    // Fetch EcoActors
    axios
      .get("http://localhost:8000/api/ecoactors/")
      .then((response) => {
        console.log(response.data);
        setEcoActor(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ecoactors:", error);
      });
  }, []);

  const toggleActorPanel = (actor) => {
    setSelectedActor((prevState) => {
      if (prevState === actor) {
        return null; // Close the panel if the same marker is clicked again
      } else {
        return actor; // Show the panel with actor information
      }
    });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Call the API to filter actors by location based on the searchCity value
    axios
      .get(
        `http://localhost:8000/api/ecoactors/filter-by-location/?ville=${searchCity}`
      )
      .then((response) => {
        setEcoActor(response.data);
      })
      .catch((error) => {
        console.error("Error filtering actors by location:", error);
      });
  };

  const handleCategorySubmit = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://localhost:8000/api/ecoactors/filter-by-category/?category=${selectedCategory}`
      )
      .then((response) => {
        console.log("category ", selectedCategory);
        setEcoActor(response.data);
      })
      .catch((error) => {
        console.error("Error filtering actors by category:", error);
      });
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <div style={{ position: "relative" }}>
        <form
          className="w-2/8 block uppercase tracking-wide text-ms font-bold mb-2 absolute top-20 start-10 z-20 bg-white p-3 rounded-lg-1/3 shadow-lg"
          onSubmit={(e) => {
            if (!searchCity) {
              e.preventDefault();
            } else {
              handleSearchSubmit(e);
            }
          }}
        >
          <div className="flex items-center">
            <label className="font font-semibold">Search by city: </label>
            <select
              id="search-dropdown"
              className="block w-100 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:border-gray-400 dark:placeholder-gray-200 dark:text-black"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
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
            {searchCity && (
              <button
                type="button"
                onClick={() => setSearchCity("")} // Reset the search value
                className="ml-2.5 p-2.5 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 18-6-6m0 0 6-6m-6 6h13"
                  />
                </svg>
                <span className="sr-only">Reset</span>
              </button>
            )}
            <button
              type="submit"
              className="ml-2.5 p-2.5 text-sm text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        <form
          className="block uppercase tracking-wide text-ms font-bold mb-2 absolute top-40 start-10 z-20 bg-white p-3 rounded-lg-1/3 shadow-lg"
          onSubmit={(e) => {
            handleCategorySubmit(e);
          }}
        >
          <div className="flex items-center">
            <label className="font-semibold">Search by category: </label>
            <select
              id="category-dropdown"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option className="font-semibold" value="">
                Select a category...
              </option>
              <option className="font-semibold" value="Agriculture">
                Agriculture
              </option>
              <option className="font-semibold" value="Industrie">
                Industrie
              </option>
              <option className="font-semibold" value="Verre">
                Verre
              </option>
              {/* Add more options for other categories if needed */}
            </select>
            {selectedCategory && (
              <button
                type="button"
                onClick={() => setSelectedCategory("")} // Reset the selected category
                className="ml-2.5 p-2.5 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 18-6-6m0 0 6-6m-6 6h13"
                  />
                </svg>
                <span className="sr-only">Reset</span>
              </button>
            )}

            <button
              type="submit"
              className="ml-2.5 p-2.5 text-sm text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>

        <div className="items-center h-1/2 w-full zIndex: 0">
          <MapContainer
            center={[34.0479, 9.5077]}
            zoom={6}
            style={{ height: "600px", width: "100vw", zIndex: 0 }} // Add zIndex: 0
            className="rounded-lg shadow-md"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {ecoActor.map((actor, index) => (
              <Marker
                key={actor.id}
                position={[actor.latitude, actor.longitude]}
                eventHandlers={{
                  click: () => toggleActorPanel(actor),
                }}
              >
                <Popup>{actor.username}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {selectedActor && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute bg-white rounded-lg shadow-md p-6 z-50">
            <h2 className="text-xl font-bold text-green-500 mb-4">
              {selectedActor.username}
            </h2>
            <p className="text-base">
              Latitude: {selectedActor.latitude}, Longitude:{" "}
              {selectedActor.longitude}
            </p>
            <p className="text-base">Telephone: {selectedActor.telephone}</p>
            <p className="text-base">Activités: {selectedActor.activitis}</p>
            <button
              className="mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600"
              onClick={() => setSelectedActor(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <EcologyChallenges></EcologyChallenges>
      <WebsiteFAQSection></WebsiteFAQSection>

      <Footer />
    </div>
  );
};

export default EcoMap;
