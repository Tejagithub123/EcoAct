import React from "react";

const Content = ({ setCurrentPage }) => {
  return (
    <div>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${require("../img/front-view-smiley-man-talking-phone-eco-friendly-wind-power-project-layout.jpg")})`,
        }}
      >
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
          <div className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 mb-5">
                <h1 className="text-3xl text-center font-bold mb-10">
                  {" "}
                  Admin Dashboard{" "}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-blue-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Manage Actors
                    </h3>
                    <p className="text-gray-700">
                      Perform CRUD operations on eco actors.
                    </p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Manage Categories
                    </h3>
                    <p className="text-gray-700">
                      Perform CRUD operations on eco categories.
                    </p>
                  </div>
                  <div className="bg-yellow-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      Manage Events
                    </h3>
                    <p className="text-gray-700">
                      Perform CRUD operations on eco events.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Content;
