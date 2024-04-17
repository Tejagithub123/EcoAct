import { FaTrash, FaCheck } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const Confirm = ({ setCurrentPage }) => {
  const [ecoActors, setEcoActors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [noRequests, setNoRequests] = useState(false);

  useEffect(() => {
    fetchEcoActors();
    fetchCategories();
  }, []);

  const fetchEcoActors = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/api/ecoactors-candidats/"
      );
      const data = await response.json();
      const reversedData = data.reverse();
      setEcoActors(reversedData);
      setNoRequests(data.length === 0); // Définir l'état noRequests
    } catch (error) {
      console.error("Error fetching eco actors candidats:", error);
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

  const handleDelete = async (id) => {
    try {
      console.log("call delete", id);
      await fetch(`http://localhost:8000/api/ecoactors-candidats/${id}/`, {
        method: "DELETE",
      });
      setEcoActors(ecoActors.filter((actor) => actor.id !== id));
    } catch (error) {
      console.error("Error deleting eco actor candidat:", error);
    }
  };

  const handleActivate = async (id) => {
    try {
      console.log("call activate", id);
      // Fetch eco actor candidat data
      const response = await fetch(
        `http://localhost:8000/api/ecoactors-candidats/${id}/`
      );
      const ecoActorCandidatData = await response.json();

      // Create a new eco actor without the active field
      const { active, ...newEcoActorData } = ecoActorCandidatData;
      await fetch("http://localhost:8000/api/ecoactors/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEcoActorData),
      });

      // Delete the eco actor candidat
      await handleDelete(id);
    } catch (error) {
      console.error("Error activating eco actor candidat:", error);
    }
    setCurrentPage("Consult");
  };

  return (
    <main className="">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            {/* Table */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="ml-14">
              {noRequests ? (
                <div class="font-[sans-serif] space-y-6">
                  <div
                    class="bg-white flex min-h-[60px] text-green-600 border border-green-500 rounded relative"
                    role="alert"
                  >
                    <div class="bg-green-500 w-16 shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 fill-white"
                        viewBox="0 0 512 512"
                      >
                        <ellipse
                          cx="256"
                          cy="256"
                          data-original="#fff"
                          rx="256"
                          ry="255.832"
                        />
                        <path
                          class="fill-green-600"
                          d="m235.472 392.08-121.04-94.296 34.416-44.168 74.328 57.904 122.672-177.016 46.032 31.888z"
                          data-original="#ffffff"
                        />
                      </svg>
                    </div>
                    <div class="px-4 py-1">
                      <p class="font-bold text-base mr-4 mb-0.5">
                        No eco-actors at the moment.
                      </p>
                      <span class="block sm:inline text-sm">
                        There are no requests from eco-actors available at the
                        moment. Please check back later.
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <table className="min-w-full  bg-white font-sans">
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
                        <td className="px-6 py-4  min-w-[100px] text-sm text-gray-900">
                          {actor.username}
                        </td>
                        <td className="px-6 py-4 min-w-[100px] text-sm text-gray-900">
                          {actor.email}
                        </td>
                        <td className="px-6 py-4 min-w-[100px] text-sm text-gray-900">
                          {actor.telephone}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {actor.adresse}
                        </td>
                        <td className="px-6 py-4 text-sm min-w-[100px] text-gray-900">
                          {actor.ville}
                        </td>
                        <td className="px-6 py-4 text-sm min-w-[100px] text-gray-900">
                          {actor.activitis}
                        </td>
                        <td className="px-6 py-4 text-sm min-w-[100px] text-gray-900">
                          {actor.categories.map((categoryId, index) => (
                            <span key={index}>
                              {getCategoryNameById(categoryId)}
                              {index !== actor.categories.length - 1 && ", "}
                            </span>
                          ))}
                        </td>
                        <td className="px-6 py-4 min-w-[100px]">
                          <button
                            className="mr-2 text-green-500 hover:text-green-700"
                            title="Activate"
                            onClick={() => handleActivate(actor.id)}
                          >
                            Activate
                          </button>
                          <button
                            className="text-red-500 hover:text-red-700"
                            title="Delete"
                            onClick={() => handleDelete(actor.id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Confirm;
