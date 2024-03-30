import React from "react";

const Content = () => {
  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <h1 className="text-3xl flex justify-center font-bold mb-10">
              Environmental Actor Dashboard
            </h1>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="bg-green-200 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">
                  Sustainability Metrics
                </h2>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-700">Carbon Footprint</div>
                  <div className="text-3xl font-bold">245 tons</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-700">Water Usage</div>
                  <div className="text-3xl font-bold">
                    1200 m<sup>3</sup>
                  </div>
                </div>
              </div>
              <div className="bg-blue-200 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">
                  Environmental Initiatives
                </h2>
                <div className="flex flex-col space-y-4">
                  <div className="border-b border-gray-400 pb-4">
                    <h3 className="text-lg font-semibold">
                      Tree Plantation Drive
                    </h3>
                    <p className="text-gray-700">
                      Planting 1000 trees in local communities.
                    </p>
                  </div>
                  <div className="border-b border-gray-400 pb-4">
                    <h3 className="text-lg font-semibold">
                      Clean Energy Adoption
                    </h3>
                    <p className="text-gray-700">
                      Installing solar panels on company premises.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Waste Reduction Campaign
                    </h3>
                    <p className="text-gray-700">
                      Implementing recycling programs to reduce waste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
