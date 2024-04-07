
import imgp from "../../img/recycle-background-with-recycle-sign-rubbish.jpg"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
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
    <div>

<Navbar />

{/* Banner */}
<div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
  <img
    src={imgp}
    alt="Banner Image"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
    <h2 className="sm:text-4xl text-2xl font-bold mb-6">
      Analyse trash
    </h2>
    <p className="text-lg text-center text-gray-200">
      Machine learning trash segregation and recommendation.
    </p>

  </div>
</div>
{/* Banner */}

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









<Footer />
    </div> 


     );
}

export default Prediction;