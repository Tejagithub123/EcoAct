import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import axios from "axios";
import { FaLightbulb } from 'react-icons/fa';
import WasteType from "./WasteType";
import Chart from "./Chart";
import { jwtDecode } from 'jwt-decode' 
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./wastevideo.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

let classifier;

function WasteVideo2() {
  const videoRef = useRef();
  const [start, setStart] = useState(false);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [stopped, setStopped] = useState(false);
  const [sentToBackend, setSentToBackend] = useState(false);
  const [recommendedActors, setRecommendedActors] = useState([]);
  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
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

  const toggle = () => {
    setStart(!start);
    setStopped(!stopped);
    setSentToBackend(false);
    setResult([]);
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
  return (
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
        <div className="capture">
          <video
            ref={videoRef}
            style={{ transform: "scale(-1, 1)" }}
            width="300"
            height="150"
          />
          {loaded && (
            <button className="mt-10 inline-flex items-center justify-center text-white text-3xl rounded-full bg-green-500 border-0 py-4 px-12 focus:outline-none hover:bg-green-700" onClick={() => toggle()}>
              {start ? "Stop" : "Start"}
            </button>
          )}
        </div>
         {/* hell */}
        {result.length > 0 && (
          <div>
            <Chart data={result[0]} />
          </div>
        )}
      </div>
      {result.length > 0 && (
        <div className="results">
          <WasteType data={result} />
        </div>
      )}
     
     {/* Display recommended actors in a popup/modal */}
    
<div class="px-3 md:lg:xl:px-40 border-t border-b py-20 bg-opacity-10" style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')" }}>
<div class="w-full bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-center items-center">
        <p class="text-white">
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
      
  
  );
}


export default WasteVideo2;
