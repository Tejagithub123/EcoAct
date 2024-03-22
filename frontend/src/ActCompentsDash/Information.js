import React from "react";

const Information = () => {
  return (
    <main class="ml-60 pt-16 max-h-screen overflow-auto">
      <div class="px-6 py-8">
        <div class="bg-gray-50 font-[sans-serif] p-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 gap-12 items-center md:max-w-7xl max-w-lg mx-auto">
            <div>
              <h2 class="text-4xl font-bold text-gray-300 uppercase mb-6">
                Events
              </h2>
              <h2 class="text-3xl font-extrabold text-[#333] uppercase leading-10">
                Discover Our Letest Blog Posts
              </h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
              <div class="cursor-pointer rounded overflow-hidden group">
                <img
                  src="https://readymadeui.com/Imagination.webp"
                  alt="Blog Post 1"
                  class="w-full h-52 object-cover"
                />
                <div class="py-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    10 FEB 2023 | BY JOHN DOE
                  </span>
                  <h3 class="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                    A Guide to Igniting Your Imagination
                  </h3>
                </div>
              </div>
              <div class="cursor-pointer rounded overflow-hidden group">
                <img
                  src="https://readymadeui.com/hacks-watch.webp"
                  alt="Blog Post 2"
                  class="w-full h-52 object-cover"
                />
                <div class="py-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    7 JUN 2023 | BY MARK ADAIR
                  </span>
                  <h3 class="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                    Hacks to Supercharge Your Day
                  </h3>
                </div>
              </div>
              <div class="cursor-pointer rounded overflow-hidden group">
                <img
                  src="https://readymadeui.com/prediction.webp"
                  alt="Blog Post 3"
                  class="w-full h-52 object-cover"
                />
                <div class="py-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    5 OCT 2023 | BY SIMON KONECKI
                  </span>
                  <h3 class="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                    Trends and Predictions
                  </h3>
                </div>
              </div>
              <div class="cursor-pointer rounded overflow-hidden group">
                <img
                  src="https://readymadeui.com/team-image.webp"
                  alt="Blog Post 3"
                  class="w-full h-52 object-cover"
                />
                <div class="py-6">
                  <span class="text-sm block text-gray-400 mb-2">
                    10 DEC 2023 | BY SIMON KONECKI
                  </span>
                  <h3 class="text-xl font-bold text-[#333] group-hover:text-blue-500 transition-all">
                    Innovators Changing the Game
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Information;
