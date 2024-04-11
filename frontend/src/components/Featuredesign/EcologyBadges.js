import React, { useState } from "react";

const EcologyBadges = () => {
  const [showText, setShowText] = useState(false); // State to manage text visibility

  // Function to toggle text visibility
  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <div className="font-[sans-serif] space-x-10 flex justify-center">
      {/* Badge 1 */}
      <div
        className="w-48 h-48 flex items-center justify-center shrink-0 bg-green-400 rounded-full shadow-lg p-6 cursor-pointer"
        onClick={toggleText} // Toggle text visibility on click
      >
        <div className="text-[#333] text-center uppercase">
          <h3 className="text-xl font-semibold">ISO 14001</h3>
          {showText && (
            <p className="text-sm font-medium">Environmental Management</p>
          )}
        </div>
      </div>

      {/* Badge 2 */}
      <div
        className="w-48 h-48 flex items-center justify-center shrink-0 bg-green-400 rounded-full shadow-lg p-6 cursor-pointer"
        onClick={toggleText} // Toggle text visibility on click
      >
        <div className="text-white text-center uppercase">
          <h3 className="text-xl font-semibold">ISO 50001</h3>
          {showText && <p className="text-sm font-medium">Energy Management</p>}
        </div>
      </div>

      {/* Badge 3 */}
      <div
        className="w-48 h-48 flex items-center justify-center shrink-0 bg-green-400 rounded-full shadow-lg p-6 cursor-pointer"
        onClick={toggleText} // Toggle text visibility on click
      >
        <div className="text-[#333] text-center uppercase">
          <h3 className="text-xl font-semibold">ISO 14064</h3>
          {showText && (
            <p className="text-sm font-medium">Greenhouse Gas Management</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EcologyBadges;
