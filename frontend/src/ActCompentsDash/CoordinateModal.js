import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const CoordinateModal = ({ onSave, onCancel }) => {
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleMapClick = (e) => {
    setSelectedPosition(e.latlng);
  };

  const handleSaveClick = () => {
    if (selectedPosition) {
      onSave(selectedPosition);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Select New Coordinates</h2>
        <div className="mb-4">
          <MapContainer
            center={[34.0479, 9.5077]}
            zoom={6}
            style={{ height: "300px", width: "100%" }}
            onClick={handleMapClick}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {selectedPosition && (
              <Marker position={selectedPosition}>
                <Popup>Selected Coordinates</Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSaveClick}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoordinateModal;
