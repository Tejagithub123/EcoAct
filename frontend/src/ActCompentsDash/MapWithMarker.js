import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";

const MapWithMarker = ({ initialCoordinates, onMarkerDrag }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setLatLng(initialCoordinates);
    }
  }, [initialCoordinates]);

  const handleMarkerDragEnd = (event) => {
    const newPosition = event.target.getLatLng();
    const newCoordinates = {
      lat: newPosition.lat,
      lng: newPosition.lng,
    };
    onMarkerDrag(newCoordinates);
  };

  const LocationMarker = () => {
    useMapEvents({
      click: (event) => {
        markerRef.current.setLatLng(event.latlng);
        handleMarkerDragEnd({ target: markerRef.current });
      },
    });

    return initialCoordinates ? (
      <Marker
        position={initialCoordinates}
        draggable={true}
        eventHandlers={{
          dragend: handleMarkerDragEnd,
        }}
        ref={markerRef}
      />
    ) : null;
  };

  return (
    <div style={{ width: "1100px", height: "400px" }}>
      <MapContainer
        center={[34.0479, 9.5077]}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapWithMarker;
