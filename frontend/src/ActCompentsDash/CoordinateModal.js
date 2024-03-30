import React, { useState } from "react";
import MapWithMarker from "./MapWithMarker"; // Assuming you have a MapWithMarker component

const CoordinateModal = ({ onClose, onSave, initialCoordinates }) => {
  const [coordinates, setCoordinates] = useState(initialCoordinates);

  const handleSave = () => {
    onSave(coordinates);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Modify Coordinates</h2>
        <MapWithMarker
          initialCoordinates={initialCoordinates}
          onMarkerDrag={(newCoordinates) => setCoordinates(newCoordinates)}
        />
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoordinateModal;
