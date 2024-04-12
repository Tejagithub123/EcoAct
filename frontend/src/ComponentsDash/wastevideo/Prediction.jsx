
import imgp from "../../img/recycle-background-with-recycle-sign-rubbish.jpg"
import WasteVideo from "./WasteVideo";
import WasteVideo2 from "./WasteVideo2";
import Landing from "../Landing"
import React, { useEffect, useRef, useState } from "react";

function Prediction () {
    const [selectedTab, setSelectedTab] = useState("Landing");
  
    const handleTabSelect = (tab) => {
      setSelectedTab(tab);
    }; 

    return  ( 
      <main className="ml-60 pt-16 max-h-screen overflow-auto">
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">

<ul class="flex divide-x-2">
  <li
    class={`tab-item text-black-600 flex items-center justify-center font-bold w-full text-sm py-2.5 px-4 cursor-pointer ${selectedTab === "Landing" ? "border-b-2 bg-white" : "border-b-2"}`}
    onClick={() => handleTabSelect("Landing")}
  >
    Landing
  </li>
  <li
    class={`tab-item text-gray-600 flex items-center justify-center font-bold w-full text-sm py-2.5 px-4 cursor-pointer ${selectedTab === "WasteVideo" ? "border-b-2 bg-white" : "border-b-2"}`}
    onClick={() => handleTabSelect("WasteVideo")}
  >
    Image Analyse
  </li>
  <li
    class={`tab-item text-gray-600 flex items-center justify-center font-bold w-full text-sm py-2.5 px-4 cursor-pointer ${selectedTab === "WasteVideo2" ? "border-b-2 bg-white" : "border-b-2"}`}
    onClick={() => handleTabSelect("WasteVideo2")}
  >
    Video Analyse
  </li>
</ul>

  <div class="w-full flex-grow">
    {/* Render component based on selected tab */}
    {selectedTab === "Landing" && <Landing />}
    {selectedTab === "WasteVideo" && <WasteVideo />}
    {selectedTab === "WasteVideo2" && <WasteVideo2 />}
  </div>









    </div> 
    </div> 
   
</main>

     );
}

export default Prediction;