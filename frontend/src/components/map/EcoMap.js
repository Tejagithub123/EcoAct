import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import EcologyChallenges from "../Featuredesign/EcologyChallenges";
import WebsiteFAQSection from "../Featuredesign/WebsiteFAQSection";
const EcoMap = () => {
  const [selectedActor, setSelectedActor] = useState(null);

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
          {ecoActors.map((actor, index) => (
            <Marker
              key={index}
              position={actor.coordinates}
              eventHandlers={{
                click: () => toggleActorPanel(actor),
              }}
            >
              <Popup>{actor.name}</Popup>
              <FaMapMarkerAlt color="red" size={30} />
            </Marker>
          ))}
        </MapContainer>
      </div>
      {selectedActor && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="absolute bg-white rounded-lg shadow-md p-6 z-50">
            {" "}
            {/* Add z-50 */}
            <h2 className="text-xl font-bold text-green-500 mb-4">
              {selectedActor.name}
            </h2>
            <p className="text-base">{selectedActor.description}</p>
            <p className="text-sm mt-4">
              Coordonnées : {selectedActor.coordinates[0]},{" "}
              {selectedActor.coordinates[1]}
            </p>
            <p className="text-sm">
              Domaines d'activités : {selectedActor.activityDomains.join(", ")}
            </p>
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
