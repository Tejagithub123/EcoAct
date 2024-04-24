import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const Information = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [imageName, setImageName] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [eventToUpdate, setEventToUpdate] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");
  const [updatedImage, setUpdatedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setImageName(files[0]);
    } else if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "date") {
      setDate(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("image", imageName);
    formDataToSend.append("name", name);
    formDataToSend.append("description", description);
    formDataToSend.append("date", date);

    try {
      await axios.post(`http://localhost:8000/api/events/`, formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchEvents();
      setShowModal(false);

      setImageName(null);
      setName("");
      setDescription("");
      setDate("");
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/events/`);
      setEvents(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleDelete = async (eventId) => {
    try {
      await axios.delete(`http://localhost:8000/api/events/${eventId}/`);
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const openUpdateModal = (event) => {
    setEventToUpdate(event);
    setUpdatedName(event.name);
    setUpdatedDescription(event.description);
    setUpdatedDate(event.date);
    setShowUpdateModal(true);
  };

  const closeUpdateModal = () => {
    setShowUpdateModal(false);
    setEventToUpdate(null);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageName || updatedImage);
      formData.append("name", updatedName);
      formData.append("description", updatedDescription);
      formData.append("date", updatedDate);

      await axios.patch(
        `http://localhost:8000/api/events/${eventToUpdate.id}/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchEvents();
      closeUpdateModal();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  return (
    <div>
      <main className="ml-60 pt-16 max-h-screen overflow-auto">
        <div className="px-6 py-8">
          <div className="flex justify-end">
            <button
              className="text-[#333] w-1/5 bg-green-500 hover:bg-green-700 px-4 py-2 rounded-lg"
              onClick={openModal}
            >
              + Add a new Event
            </button>
          </div>
          <div className="bg-gray-50 font-[sans-serif] p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
              <div
                className={`fixed inset-0 ${showModal ? "block" : "hidden"}`}
              >
                <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
                    <button
                      className="w-6 h-6 absolute top-4 right-4"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500"
                        viewBox="0 0 320.591 320.591"
                      >
                        <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                        <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                      </svg>
                    </button>
                    <div className="my-6 text-center">
                      <h4 className="text-3xl text-[#333] font-extrabold">
                        Add Event
                      </h4>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="relative flex items-center">
                        <input
                          type="file"
                          placeholder="Enter Image"
                          className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                          name="image"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative flex items-center">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                          name="name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative flex items-center">
                        <textarea
                          placeholder="Enter Description"
                          className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                          name="description"
                          value={description}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="relative flex items-center">
                        <input
                          type="date"
                          placeholder="Enter Date"
                          className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg"
                          name="date"
                          value={date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <button
                          type="submit"
                          className="px-6 py-3 w-[49%] font-semibold bg-green-600 hover:bg-green-700 text-white rounded-full"
                        >
                          Add Event
                        </button>
                        <button
                          type="button"
                          onClick={closeModal}
                          className="px-6 py-3 w-[49%] font-semibold bg-red-600 hover:bg-red-700 text-white rounded-full"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {events.map((event) => (
                <div
                  key={event.id}
                  className="hover:translate-y-2 cursor-pointer rounded overflow-hidden group"
                >
                  <img
                    src={`${event.image}`}
                    alt={event.name}
                    className="w-full h-52"
                  />
                  <div className="py-6">
                    <span className="text-sm block text-gray-400 mb-2">
                      {event.date}
                    </span>
                    <h3 className="text-xl font-bold text-[#333] group-hover:text-green-500 transition-all">
                      {event.name}
                    </h3>
                    <p className="text-gray-600">{event.description}</p>
                    <div className="flex justify-end">
                      <FaEdit
                        className="text-blue-500 cursor-pointer mt-2 mr-2"
                        onClick={() => openUpdateModal(event)}
                        size={27}
                      />
                      <FaTrash
                        className="text-red-500 cursor-pointer mt-2"
                        onClick={() => handleDelete(event.id)}
                        size={24}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {showUpdateModal && eventToUpdate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg p-8 rounded-lg">
            <button
              onClick={closeUpdateModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">Update Event</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={updatedDate}
                  onChange={(e) => setUpdatedDate(e.target.value)}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setUpdatedImage(e.target.files[0])}
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleUpdate}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={closeUpdateModal}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Information;
