import React from "react";
import dustbin from "./dustbin.png";

import imageecosign from "./photos/nareeta-martin-FoG7PKNYjpM-unsplash.jpg"
import truck from "./Truck.png"; 

import imagetru from '../../../src/img/sustainable-development-goals-still-lifes.jpg'

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


import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
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
          <div className="relative h-screen w-screen">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 h-full w-full transition-opacity duration-2000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ paddingBottom: '6.5%', paddingRight: '13px' }}
        >
          <img 
            src={image}
            alt={`Image ${index}`}
          
            className="flex w-full h-full object-cover object-center opacity-30"
          />

        {/* Text centered above the image */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
  <h2 className="italic text-4xl text-gray-400">At ActEco, we're committed to fostering sustainable practices and promoting eco-initiatives that contribute to a healthier planet.</h2>
</div>


<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-40">
  {/* Button for Contact */}
  <button 
    onClick={() => console.log('Contact button clicked')}
    className="bg-transparent px-12 py-5 border border-green-500 hover:border-transparent rounded text-white font-medium text-lg leading-snug uppercase mr-20 hover:text-green-600 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
  >
    <Link to="/Contact">Contact</Link>
  </button>
  {/* Button for Signup */}
  <button
    onClick={() => console.log('Sign Up button clicked')}
    className="px-12 py-5 bg-green-600 text-white font-medium text-lg leading-snug uppercase rounded-lg hover:text-green-600 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
  >
    <Link to="/signup">Signup</Link>
  </button>
</div>
        </div>
      ))} 
    </div>
    
{/*ML/*/}
      <section className="text-gray-600 body-font scroll-smooth" id="shawn">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className=" lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
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
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                <Link to="/video">Web Cam</Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link to="/image">Image Upload</Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* next section */}

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="rounded lg:w-3/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={imagetru}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Why ActEco?
            </h1>
            <p className="mb-8 leading-relaxed">
            Our app serves as a platform to introduce various actors in the field of environmental sustainability, including startups, municipalities, ecological farms, and others. Through our platform, these entities can effectively manage and contribute to environmental conservation efforts. By providing users with intuitive tools to identify recyclable items and educate them on proper disposal methods, our app empowers these actors to make a positive impact on the environment.
            </p>
          
          </div>
        </div>
      </section>
     {/*<NewWaste />*/} 
    
    
     <Footer />
    </div>
  );
  
  
};

export default HomePage;
