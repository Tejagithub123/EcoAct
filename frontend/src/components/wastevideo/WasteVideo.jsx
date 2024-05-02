import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import axios from "axios";
import WasteType from "./WasteType";
import { FaLightbulb } from 'react-icons/fa';
import Chart from "./Chart";
import { FaUpload } from "react-icons/fa";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./wastevideo.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { jwtDecode } from 'jwt-decode' 
let classifier;

function WasteVideo() {
  const inputRef = useRef();
  const [imageData, setImageData] = useState('');
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [sentToBackend, setSentToBackend] = useState(false); // New state variable
  const [recommendedActors, setRecommendedActors] = useState([]);
  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      setLoaded(true);
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(inputRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        console.log(results);
        if (stopped && !sentToBackend) { // Check if not sent to backend yet
          sendResultsToBackend(results);
        }
      });
    }
  }, 500);

  useEffect(() => {
    if (!start) {
      setImageData('');
      inputRef.current = null;
    }
  }, [start]); 

  const toggle = () => {
    setStart(!start);
    setResult([]);
    setStopped(!stopped);
    setSentToBackend(false);

  };

    const sendResultsToBackend = (results) => {
    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;
    console.log("userId",userId)
    if (results.length > 0) {
      const firstResult = results[0];
      const data = {
        text: firstResult.label,
        prediction: firstResult.confidence,
        user_id: userId
      };
      console.log("data to back",data)
        axios.post("http://localhost:8000/api/prediction/", data, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log("Data saved successfully:", response.data);
          setSentToBackend(true);
          fetchRecommendedActors(); 
          setStart(false);

        })
        .catch(error => {
          console.error("Error saving data:", error);
        });
      }} 

      const fetchRecommendedActors = () => {
        axios.get("http://localhost:8000/api/recommandactors/")
          .then(response => {
            console.log("Recommended actors:", response.data);
            setRecommendedActors(response.data);
            // Open popup/modal to show recommended actors
           
          })
          .catch(error => {
            console.error("Error fetching recommended actors:", error);
          });
      };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const img = new Image();
        setImageData(reader.result);
        img.src = reader.result;
        img.onload = () => {
          inputRef.current = img;
        };
      };
    }
  };

  return (
    <>
      
      <div className="wastevideo">
        <Loader
          type="Watch"
          color="#00BFFF"
          height={200}
          width={200}
          visible={!loaded}
          style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
        />
        <div className="upper bg-white">
          <div className="capture m-20">
            {!imageData && <label
              htmlFor="file-upload"
              className="relative cursor-pointer flex justify-center items-center rounded-lg border-dashed border-gray-300 border-2 py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:border-gray-400"
            >
              <div className="flex flex-col items-center space-y-1">
                <FaUpload className="text-gray-400" size={30} />
                <span className="text-gray-400 font-medium">Upload an image</span>
                <h2>{inputRef.current ? "File uploaded" : ""}</h2>
              </div>
              <input
        sendResultsToBackend         id="file-upload"
                type="file"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>}
            {imageData && <><h2>Image Uploaded</h2><br /><img className="w-80 h-80 rounded-md" src={imageData} alt="Uploaded Pic" /></>}
            {loaded && (
              <button className="mt-10 inline-flex items-center justify-center text-white text-3xl rounded-full bg-green-500 border-0 py-4 px-12 focus:outline-none hover:bg-green-700" onClick={toggle}>
                {start ? "Stop" : "Start"}
              </button>
            )}
          </div>
          
          {/* hell */}
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            {result.length > 0 && (
              <div className="mt-20">
                <Chart data={result[0]} />
                {console.log("res"+result[0])}
              </div>
            )}
          </div>
        </div>
        {result.length > 0 && (
          <div className="results">
            <WasteType data={result} />
          </div>
        )}
        {/* Display recommended actors in a popup/modal */}
    
<div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')" }}>
<div class="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-center items-center">
        <p class="text-white ">
            <span class="text-4xl font-medium">Recommendations</span> <br />
        
        </p>
    </div>
    <div class={`grid grid-cols-1 md:lg:xl:grid-cols-${Math.min(recommendedActors.length, 3)} group bg-white shadow-xl shadow-neutral-100 border `}>
        {/* Loop through recommended actors */}
        {recommendedActors.map(actor => (
            <div key={actor.id} class="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
                <span class="p-5 rounded-full bg-green-500 text-white shadow-lg shadow-red-200">
                    <FaLightbulb size={30} /> {/* Use the FaLightbulb icon from React Icons */}
                </span>
                <p class="text-xl font-medium text-slate-700 mt-3">{actor.username}</p>
                <p class="mt-2 text-sm text-slate-500">{actor.activitis}</p>
                <p class="mt-2 text-sm text-slate-500">{actor.email}</p>
                <button class="px-5 py-3 font-medium text-slate-700 shadow-xl hover:bg-yellow-500 duration-150 bg-yellow-300">Contact</button>
        
            </div>
        ))}
    </div>

  
</div>
</div>
      
    </>
  );
}

export default WasteVideo;