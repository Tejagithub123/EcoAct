import React from "react";

const Sidebar = ({ setCurrentPage }) => {
  const handleItemClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
      <div className="flex flex-col justify-between h-full">
        <div className="flex-grow">
          <div className="px-4 py-6 text-center border-b">
            <h1 className="text-xl font-bold leading-none">
              <span className="text-yellow-700">Task Manager</span> App
            </h1>
          </div>
          <div className="p-4">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleItemClick("plan")}
                  className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"
                >
                  Plan
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleItemClick("taskList")}
                  className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                >
                  Task list
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleItemClick("Information")}
                  className="flex bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"
                >
                  Information
                </button>
              </li>
              {/* Add more sidebar items with similar onClick handlers */}
            </ul>
          </div>
        </div>
        <div className="p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
