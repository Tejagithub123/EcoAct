import React from "react";
import dustbin from "./dustbin.png";

import imageecosign from "../../img/girl-sorting-garbage-with-reduce-reuse-recycle-text-environment-banner.jpg"
import truck from "./Truck.png"; 

import imagetru from '../../../src/img/group-businesspeople-fist-bumping-desk.jpg'

import video1 from "./wastvideo.mp4";
import Image from '../../components/nareeta-martin-FoG7PKNYjpM-unsplash.jpg'
import { useState } from 'react';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { useEffect } from "react";
import './homepage.css'

import { Link } from 'react-router-dom'
import ImageOne from '../../../src/img/sustainable-development-goals-still-life.jpg';
import ImageTwo from '../../../src/components/homepage/photos/concept-volontariat-pour-protection-environnement-jeune-militante.jpg';
import ImageThree from '../../../src/components/homepage/photos/close-up-man-covering-his-mouth-with-map.jpg';

import NewWaste from "../wastevideo/NewWaste";

import imghead from "./photos/close-up-man-covering-his-mouth-with-map.jpg"

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FeaturesSection from "../Featuredesign/FeaturesSection"
import NewsletterSubscription from "../Featuredesign/NewsletterSubscription";

const images = [ImageOne, ImageTwo, ImageThree];

const HomePage = () => {

  
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  return (
   
      <div>
        <Navbar />
        <div class="bg-green-500 p-12 font-[sans-serif] h-[90vh]">
  <div class="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-8">
    <div class="text-center md:text-left md:w-full">
      <h2 class="text-6xl lg:text-7xl font-extrabold text-white mb-8 md:!leading-[75px]">ActEco - Our Website for Initiatives</h2>
      <p class="text-2xl lg:text-3xl text-white mb-8">Join ActEco's premium plan and accelerate your impact on the environment. Explore exclusive features and unlock new opportunities for ecological initiatives.</p>
      <a href="/Signup" class="bg-black hover:bg-opacity-80 text-white py-4 px-12 rounded-full text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
        Sign Up
      </a>
      <a href="/Contact" class="bg-black hover:bg-opacity-80 text-white py-4 px-12 rounded-full text-lg lg:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block ml-4">
        Contact
      </a>
    </div>
  
    <div class="text-center hidden md:block">
  <img src={imghead} alt="Premium Benefits" class="w-full h-full object-cover mx-auto" />
</div>
  </div>
</div>


{/*ML/*/}
      <section className="text-gray-600 body-font scroll-smooth" id="shawn">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="w-full lg:w-2/3 md:w-/6  mb-10 object-cover object-center rounded"
            alt="hero"
            src={imageecosign}
          />
          <div className="text-center lg:w-2/3 w-full" >
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              ML-based Garbage Segregation
            </h1>
            <p className="mb-8 leading-relaxed">
            We utilize a machine learning-based approach for waste management, leveraging webcam feeds and image uploads. This process entails capturing real-time images or submitting individual images of waste material, subsequently subjecting them to preprocessing and standardization for training a supervised machine learning model. Upon training, the model discerns and sorts waste materials based on their visual characteristics like color, texture, and shape. As a result, our system offers users valuable feedback, including labeled descriptions of the waste material. This empowers users to engage with ecological initiatives and recommend sustainable practices.            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white text-3xl rounded-full bg-green-500 border-0 py-2 px-10 focus:outline-none hover:bg-green-600 ">
                <Link to="/login">Web Cam</Link>
              </button>
              <button className="ml-4 inline-flex  rounded-full text-gray-700 bg-gray-100 border-0 text-3xl py-2 px-10 focus:outline-none hover:bg-gray-200">
                <Link to="/login">Image Upload</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* next section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-3 py-30 items-center justify-center flex-col-2">
          <img
            className="lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={imagetru}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why ActEco?
            </h1>
            <p className="mb-8 ml-7 leading-relaxed">
            Our app serves as a platform to introduce various actors in the field of environmental sustainability, including startups, municipalities, ecological farms, and others. Through our platform, these entities can effectively manage and contribute to environmental conservation efforts. By providing users with intuitive tools to identify recyclable items and educate them on proper disposal methods, our app empowers these actors to make a positive impact on the environment.
            </p>
          
          </div>
        </div>
      </section>
     {/*<NewWaste />*/} 
    <FeaturesSection/>
    <br></br>
   <NewsletterSubscription></NewsletterSubscription> 
  
     <Footer />
    </div>
  );
  
  
};

export default HomePage;
