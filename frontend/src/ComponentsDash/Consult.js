import { FaTrash, FaEdit, FaTimesCircle, FaCheck } from "react-icons/fa";
import React, { useState, useEffect } from "react";

function Consult() {
  const [ecoActors, setEcoActors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editableActor, setEditableActor] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchEcoActors();
    fetchCategories();
  }, []);

  const fetchEcoActors = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/ecoactors/");
      const data = await response.json();
      const reversedData = data.reverse();
      setEcoActors(reversedData);
    } catch (error) {
      console.error("Error fetching eco actors:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/categories/");
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getCategoryNameById = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "";
  };

  const handleResetSearch = async () => {
    setSearchTerm(""); // Reset the search term
    fetchEcoActors(); // Fetch all actors again
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      handleResetSearch();
      return;
    }

    try {
      const matchingActor = ecoActors.find(
        (actor) => actor.username.toLowerCase() === searchTerm.toLowerCase()
      );
      if (!matchingActor) {
        setEcoActors([]);
        console.log("No matching actor found.");
      }
      const response = await fetch(
        `http://localhost:8000/api/ecoactors/${matchingActor.id}/`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      // Update the ecoActors state with the new data
      setEcoActors([data]);
    } catch (error) {
      console.error("Error searching eco actors:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      console.log("call delete", id);
      await fetch(`http://localhost:8000/api/ecoactors/${id}/`, {
        method: "DELETE",
      });
      setEcoActors(ecoActors.filter((actor) => actor.id !== id));
    } catch (error) {
      console.error("Error deleting eco actor:", error);
    }
  };

  const handleEdit = (actor) => {
    setEditableActor(actor);
    setIsEditing(true);
    setEditedData({ ...actor });
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/ecoactors/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedData),
        }
      );
      const updatedActor = await response.json();
      setEcoActors(
        ecoActors.map((actor) => (actor.id === id ? updatedActor : actor))
      );
      setIsEditing(false);
      setEditableActor(null);
      setEditedData({});
    } catch (error) {
      console.error("Error updating eco actor:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };
  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            {/* Search input */}
            <div className="mt-8 flex items-center bg-white border border-gray-300 rounded overflow-hidden">
              <input
                name="name"
                type="text"
                className="flex-1 w-full bg-transparent text-sm px-4 py-3 outline-none"
                placeholder="Search by actor name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="button"
                className="w-max px-6 py-3 text-sm tracking-wider font-semibold outline-none border-none bg-green-600 hover:bg-green-700 text-white transition-all"
                onClick={handleSearch}
              >
                Search
              </button>
              <button
                type="button"
                className="w-max px-6 py-3 outline-none border-none bg-gray-200 hover:bg-gray-300 text-gray-800 transition-all"
                onClick={handleResetSearch}
                disabled={!searchTerm.trim()}
              >
                <FaTimesCircle />
              </button>
            </div>
            <br />
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white font-sans">
                <thead className="bg-green-300 whitespace-nowrap">
                  <tr>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Username
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Email
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Telephone
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Adresse
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      City
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Activities
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Categories
                    </th>
                    <th className="px-6 py-3 text-center text-xm font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="whitespace-nowrap divide-y divide-black">
                  {ecoActors.map((actor) => (
                    <tr
                      key={actor.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="username"
                            value={editedData.username}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.username
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="email"
                            value={editedData.email}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.email
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="telephone"
                            value={editedData.telephone}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.telephone
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="adresse"
                            value={editedData.adresse}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.adresse
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="ville"
                            value={editedData.ville}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.ville
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="activitis"
                            value={editedData.activitis}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.activitis
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <input
                            type="text"
                            name="categories"
                            value={editedData.categories}
                            onChange={handleInputChange}
                          />
                        ) : (
                          actor.categories.map((categoryId, index) => (
                            <span key={index}>
                              {getCategoryNameById(categoryId)}
                              {index !== actor.categories.length - 1 && ", "}
                            </span>
                          ))
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {isEditing &&
                        editableActor &&
                        editableActor.id === actor.id ? (
                          <button
                            className="mr-2 text-green-500 hover:text-green-700"
                            title="Update"
                            onClick={() => handleUpdate(actor.id)}
                          >
                            <FaCheck />
                          </button>
                        ) : (
                          <>
                            <button
                              className="mr-2 text-blue-500 hover:text-blue-700"
                              title="Edit"
                              onClick={() => handleEdit(actor)}
                            >
                              <FaEdit />
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700"
                              title="Delete"
                              onClick={() => handleDelete(actor.id)}
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Consult;
