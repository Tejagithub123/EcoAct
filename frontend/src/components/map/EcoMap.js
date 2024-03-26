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
  const [categories, setCategories] = useState([]);
  const [filteredActorsByLocation, setFilteredActorsByLocation] = useState([]);
  const [filteredActorsByCategory, setFilteredActorsByCategory] = useState([]);

  const ecoActors = [
    {
      name: "Acteur 1",
      coordinates: [36.8065, 10.1815], // Tunis
      activityDomains: ["Recyclage", "Conservation de la nature"],
      description: "Description de l'acteur 1.",
    },
    {
      name: "Acteur 2",
      coordinates: [35.6892, 10.1479], // Sousse
      activityDomains: ["Gestion des déchets", "Énergie renouvelable"],
      description: "Description de l'acteur 2.",
    },
  ];

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

  useEffect(() => {
    // Filter actors by location
    axios
      .get(
        "http://localhost:8000/api/filter-actors-by-location/?ville=exampleVille"
      )
      .then((response) => {
        setFilteredActorsByLocation(response.data);
      })
      .catch((error) => {
        console.error("Error filtering actors by location:", error);
      });
  });

  const toggleActorPanel = (actor) => {
    setSelectedActor((prevState) => {
      if (prevState === actor) {
        return null; // Close the panel if the same marker is clicked again
      } else {
        return actor; // Show the panel with actor information
      }
    });
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <div className="flex justify-center items-center h-full w-full zIndex: 0">
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
