import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconShadow from "leaflet/dist/images/marker-shadow.png";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const customMarkerIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <MapContainer
          center={[34.0479, 9.5077]}
          zoom={6}
          style={{ height: "600px", width: "80%" }}
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
              icon={customMarkerIcon}
              onClick={() => setSelectedActor(actor)}
            >
              <Popup>{actor.name}</Popup>
            </Marker>
          ))}
          {selectedActor && (
            <Popup
              position={selectedActor.coordinates}
              onClose={() => setSelectedActor(null)}
            >
              <div>
                <h2>{selectedActor.name}</h2>
                <p>
                  Coordonnées : {selectedActor.coordinates[0]},{" "}
                  {selectedActor.coordinates[1]}
                </p>
                <p>
                  Domaines d'activités :{" "}
                  {selectedActor.activityDomains.join(", ")}
                </p>
                <p>Description : {selectedActor.description}</p>
              </div>
            </Popup>
          )}
        </MapContainer>
      </div>
      <Footer />
    </div>
  );
};

export default EcoMap;
