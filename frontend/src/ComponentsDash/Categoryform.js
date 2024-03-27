import React, { useState, useEffect } from "react";

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

  return (
    <div>
      <main className="ml-80 pt-16 overflow-auto flex-1">
        <div className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <form
                className="font-[sans-serif] m-4 max-w-4xl mx-auto mt-30"
                onSubmit={handleSubmit}
              >
                {/* name */}
                <div className="relative flex items-center">
                  <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                    name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name of the category"
                    className="px-2 py-3.5 bg-white text-black w-1/2 text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-1/2 py-3 bg-green-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Add Category
                  </button>
                </div>
              </form>
              <div className=" bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] px-6 py-8 w-full max-w-sm rounded-lg mt-20">
                <div className="flex items-center">
                  <h3 className="text-xl font-bold flex-1 text-black">
                    Categories
                  </h3>
                  <p className="text-sm text-blue-500 font-bold cursor-pointer">
                    See all
                  </p>
                </div>
                <div className="mt-8 space-y-6">
                  {/* Render fetched categories dynamically */}
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className="flex flex-wrap items-center cursor-pointer shadow-[0_0px_8px_-3px_rgba(6,81,237,0.3)] rounded-lg w-full px-4 py-4"
                    >
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-black font-semibold">
                          {category.name}
                        </p>
                        {/* Add other details of category here */}
                      </div>
                      {/* Add icon SVG for each category */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 fill-gray-400"
                        viewBox="0 0 32 32"
                      >
                        <path
                          d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categoryform;
