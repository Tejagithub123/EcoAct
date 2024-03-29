import React, { useState, useEffect } from "react";
import axios from "axios";

const EventCrud = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/event/");
      setEvents(response.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleCreateEvent = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/event/create/", {
        name,
        description,
      });
      setName("");
      setDescription("");
      fetchEvents();
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8000/api/event/${eventId}/delete/`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleSelectEvent = async (eventId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/event/${eventId}/`);
      setSelectedEvent(response.data);
    } catch (error) {
      console.error("Error fetching event details:", error);
    }
  };

  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.name}
            <button onClick={() => handleSelectEvent(event.id)}>View Details</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Create</button>
      </form>
      {selectedEvent && (
        <div>
          <h2>{selectedEvent.name}</h2>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventCrud;
