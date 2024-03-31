import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000/";

const Information = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${BASE_URL}api/events/`);
        setEvents(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchEvents();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="bg-gray-50 font-[sans-serif] p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-gray-300 uppercase mb-6">
                Events
              </h2>
              <h2 className="text-3xl font-extrabold text-[#333] uppercase leading-10">
                Discover Our Latest Events
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="cursor-pointer rounded overflow-hidden group"
                >
                  <img
                    src={`${event.image}`}
                    alt={event.name}
                    className="w-52 h-52"
                  />
                  <div className="py-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                      {event.name}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Information;
