import React, { useState, useEffect } from "react";
import { FaTrash, FaEdit, FaCheck } from "react-icons/fa";

const Categoryform = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);

  // Function to fetch categories from the API
  const fetchCategories = () => {
    fetch("http://localhost:8000/api/categories/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
    };
    fetch("http://localhost:8000/api/categories/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // After adding a category, fetch categories again to update the list
        fetchCategories();
        // Reset the form input
        setName("");
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error response as needed (e.g., show error message)
      });
  };

  const handleDeleteCategory = (categoryId) => {
    fetch(`http://localhost:8000/api/categories/${categoryId}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Category with ID ${categoryId} deleted successfully.`);
          fetchCategories();
        } else {
          console.error(`Failed to delete category with ID ${categoryId}.`);
        }
      })
      .catch((error) => {
        console.error("Error deleting category:", error);
      });
  };

  const handleUpdateCategory = (categoryId, newName) => {
    fetch(`http://localhost:8000/api/categories/${categoryId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Category with ID ${categoryId} updated successfully.`);
          fetchCategories();
        } else {
          console.error(`Failed to update category with ID ${categoryId}.`);
        }
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  const toggleEditMode = (categoryId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? { ...category, editing: !category.editing }
          : category
      )
    );
  };

  return (
    <div>
      <main className="ml-80 pt-16">
        <div className="bg-white rounded-3xl p-8 mb-5">
          <form
            className="font-[sans-serif] m-4 max-w-4xl mt-30"
            onSubmit={handleSubmit}
          >
            {/* form*/}
            <div className="relative flex items-center">
              <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter name"
                className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                className="w-1/2 py-3 ml-2 bg-green-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
        {/* panel*/}
        <div className="mr-10 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Render fetched categories dynamically */}
          {categories.map((category) => (
            <div
              key={category.id}
              className="border-double border-4 border-sky-500 max-w-sm p-6 bg-gray-200  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-400 dark:border-gray-300 dark:hover:bg-gray-400"
            >
              <div className="flex justify-between items-center mb-2">
                {category.editing ? (
                  <input
                    type="text"
                    value={category.name}
                    onChange={(e) =>
                      setCategories((prevCategories) =>
                        prevCategories.map((prevCategory) =>
                          prevCategory.id === category.id
                            ? { ...prevCategory, name: e.target.value }
                            : prevCategory
                        )
                      )
                    }
                    className="bg-transparent  w-full  border-0 border-transparent focus:border-blue-500 outline-none text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  />
                ) : (
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {category.name}
                  </h5>
                )}
                <div className="flex space-x-2">
                  {/* Delete Button */}
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteCategory(category.id)}
                  >
                    <FaTrash />
                  </button>
                  {/* Update Button */}
                  {category.editing ? (
                    <button
                      className="text-green-600 hover:text-green-800"
                      onClick={() => {
                        handleUpdateCategory(category.id, category.name);
                        toggleEditMode(category.id);
                      }}
                    >
                      <FaCheck />
                    </button>
                  ) : (
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => toggleEditMode(category.id)}
                    >
                      <FaEdit />
                    </button>
                  )}
                </div>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categoryform;