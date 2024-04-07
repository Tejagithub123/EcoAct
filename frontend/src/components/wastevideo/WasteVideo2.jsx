import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import Loader from "react-loader-spinner";
import useInterval from "@use-it/interval";
import axios from "axios";

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
          setStart(false);
        })
        .catch(error => {
          console.error("Error saving data:", error);
        });
      }}

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
            <button onClick={() => toggle()}>
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
     
    </div>
  );
}

export default WasteVideo2;
