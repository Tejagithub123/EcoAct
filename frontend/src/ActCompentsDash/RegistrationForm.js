import React from "react";

const RegistrationForm = () => {
  return (
    <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 mb-5">
            <form className="font-[sans-serif] m-6 max-w-4xl mx-auto mt-20">
              <div className="grid sm:grid-cols-2 gap-10">
                <div className="relative flex items-center">
                  <label className="text-[13px] bg-yellow-50 text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px] font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none"
                  />
                </div>
                {/* Other input fields */}
              </div>
              <button
                type="button"
                className="mt-8 px-6 py-2.5 w-1/2 text-sm font-semibold bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegistrationForm;
