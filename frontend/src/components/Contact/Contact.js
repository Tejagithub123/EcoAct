import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgcontact from "../../../src/img/about803486.jpg";
import imgcontacts from "../../../src/img/sustainable-development-goals-still-life1.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { FaRecycle, FaLeaf, FaSun, FaGlobe, FaFlag } from "react-icons/fa";
import "./Contact.css";
import img1 from "./ODD/E_SDG_Icons-01.jpg";
import img2 from "./ODD/E_SDG_Icons-02.jpg";
import img3 from "./ODD/E_SDG_Icons-03.jpg";
import img4 from "./ODD/E_SDG_Icons-04.jpg";
import img5 from "./ODD/E_SDG_Icons-05.jpg";
import img6 from "./ODD/E_SDG_Icons-06.jpg";
import img7 from "./ODD/E_SDG_Icons-07.jpg";
import img8 from "./ODD/E_SDG_Icons-08.jpg";
import img9 from "./ODD/E_SDG_Icons-09.jpg";
import img10 from "./ODD/E_SDG_Icons-10.jpg";
import img11 from "./ODD/E_SDG_Icons-11.jpg";
import img12 from "./ODD/E_SDG_Icons-12.jpg";
import img13 from "./ODD/E_SDG_Icons-13.jpg";
import img14 from "./ODD/E_SDG_Icons-14.jpg";
import img15 from "./ODD/E_SDG_Icons-15.jpg";
import img16 from "./ODD/E_SDG_Icons-16.jpg";
import img17 from "./ODD/E_SDG_Icons-17.jpg";
import imgc1 from "../../img/front-view-man-with-wooden-blocks.jpg";
import imgc2 from "../../img/sustainable-development-goals-still-lifes.jpg";
import EcologyBadges from "../Featuredesign/EcologyBadges";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  setTimeout(() => {
    setShowToast(false);
  }, 1500);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/submit/",
        formData
      );
      console.log(response.data);
      setShowToast(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          src={imgcontact}
          alt="Banner Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 className="sm:text-4xl text-2xl font-bold mb-6">
            Protect Our Planet
          </h2>
          <p className="text-lg text-center text-gray-200">
            Join us in preserving our environment for future generations.
          </p>
          <a
            href="#f1"
            className="mt-8 bg-transparent text-white text-base font-semibold py-2.5 px-6 border-2 border-white rounded hover:bg-white hover:text-black transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
      {/* Banner */}
      {/* section */}
      <section class="">
        <div class="py-12 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="font-heading mb-4 bg-green-100 text-color-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font">
                Why choose us?
              </h2>
              <p class="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Helping Preserve Our Planet
              </p>
              <p class="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                We are dedicated to environmental conservation and
                sustainability. Here's why you should choose us:
              </p>
            </div>

            <div class="mt-10">
              <dl class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative flex">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <FaRecycle size={24} />
                  </div>
                  <div>
                    <p class="font-heading ml-4 text-lg leading-6 font-bold text-gray-700">
                      Sustainable Practices
                    </p>
                    <p class="ml-4 mt-2 text-base text-gray-500">
                      We implement eco-friendly practices to minimize our carbon
                      footprint and contribute to a healthier planet.
                    </p>
                  </div>
                </div>
                <div class="relative flex mt-8 md:mt-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <FaLeaf size={24} />
                  </div>
                  <div>
                    <p class="font-heading ml-4 text-lg leading-6 font-bold text-gray-700">
                      Nature Conservation
                    </p>
                    <p class="ml-4 mt-2 text-base text-gray-500">
                      We actively support initiatives aimed at protecting
                      biodiversity and preserving natural habitats.
                    </p>
                  </div>
                </div>
                <div class="relative flex mt-8">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <FaSun size={24} />
                  </div>
                  <div>
                    <p class="font-heading ml-4 text-lg leading-6 font-bold text-gray-700">
                      Renewable Energy
                    </p>
                    <p class="ml-4 mt-2 text-base text-gray-500">
                      We are committed to using renewable energy sources to
                      power our operations and reduce reliance on fossil fuels.
                    </p>
                  </div>
                </div>
                <div class="relative flex mt-8">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <FaGlobe size={24} />
                  </div>
                  <div>
                    <p class="font-heading ml-4 text-lg leading-6 font-bold text-gray-700">
                      Global Impact
                    </p>
                    <p class="ml-4 mt-2 text-base text-gray-500">
                      Our efforts extend beyond local boundaries, aiming to make
                      a positive impact on a global scale.
                    </p>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
      <div class="flex mt-8 mr-10 justify-start ml-20">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
          <FaFlag size={24} />
        </div>
        <div className="">
          <p class="font-heading ml-8  text-lg leading-6 font-bold text-gray-700">
            Sustainable Development Goals
          </p>
          <p class="text-base text-gray-500 ml-3">
            We align our actions with the UN's Sustainable Development Goals
            (SDGs) to address global challenges and promote sustainability.
          </p>
        </div>
      </div>
      <div className="flex mb-10 overflow-hidden">
        <div className="flex-container">
          {/* Goal 1: No Poverty */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-1"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img1})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 2: Zero Hunger */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-2"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img2})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 3: Good Health and Well-being */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-3"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img3})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 4: Quality Education */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-4"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img4})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 5: Gender Equality */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-5"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img5})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 6: Clean Water and Sanitation */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-6"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img6})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          <div className="flex mb-10">
            {/* Goal 7: Affordable and Clean Energy */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-7"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img7})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>

            {/* Goal 8: Decent Work and Economic Growth */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-8"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img8})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>

            {/* Goal 9: Industry, Innovation, and Infrastructure */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-9"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img9})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>

            {/* Goal 10: Reduced Inequalities */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-10"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img10})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>

            {/* Goal 11: Sustainable Cities and Communities */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-11"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img11})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>

            {/* Goal 12: Responsible Consumption and Production */}
            <section
              className="text-gray-600 body-font scroll-smooth"
              id="goal-12"
            >
              <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
                <div
                  className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                  style={{
                    backgroundImage: `url(${img12})`,
                    width: "200px",
                    height: "200px",
                  }} // Set background image for the card container
                ></div>
              </div>
            </section>
          </div>
          {/* Goal 13: Climate Action */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-13"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img13})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 14: Life Below Water */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-14"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img14})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 15: Life on Land */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-15"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img15})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 16: Peace, Justice, and Strong Institutions */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-16"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img16})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>

          {/* Goal 17: Partnerships for the Goals */}
          <section
            className="text-gray-600 body-font scroll-smooth"
            id="goal-17"
          >
            <div className="container mx-auto flex px-5 py-8 md:py-24 items-center justify-center flex-col">
              <div
                className="bg-cover bg-center bg-no-repeat shadow-lg rounded-lg overflow-hidden w-full md:w-80 lg:w-80 xl:w-80 mx-auto transform transition duration-500 hover:scale-105"
                style={{
                  backgroundImage: `url(${img17})`,
                  width: "200px",
                  height: "200px",
                }} // Set background image for the card container
              ></div>
            </div>
          </section>
        </div>
      </div>
      <br />
      {/*section challenges */}

      {/* Contact Form Section */}
      <div id="f1" className="flex flex-col lg:flex-row px-4">
        {/* Form Section */}
        <section className="text-gray-600 body-font" id="contact-form">
          <div className="container mx-auto flex items-center justify-center flex-col">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact Us
            </h1>
            <p className="mb-8 leading-relaxed text-black">
              Provide a contact form where users can reach out for inquiries,
              collaborations, or suggestions.
            </p>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
              {/* Input fields */}
              <div className="flex flex-wrap -mx-3 mb-6">
                {/* Name */}
                <div className="w-full px-3 mb-6">
                  <label
                    htmlFor="name"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                {/* Email */}
                <div className="w-full px-3 mb-6">
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                {/* Phone */}
                <div className="w-full px-3 mb-6">
                  <label
                    htmlFor="phone"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  />
                </div>
                {/* Message */}
                <div className="w-full px-3 mb-6">
                  <label
                    htmlFor="message"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="5"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 resize-none"
                  ></textarea>
                </div>
              </div>
              {/* Submit button */}
              <div className="flex justify-center mb-30 mt-[-40px]">
                <button
                  type="submit"
                  className="margin-top: -29% bg-green-500 transform hover:translate-z-1 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
            <br></br>
            {showToast && (
              <div
                class="bg-green-100 mt-10 text-green-800 px-4 py-4 rounded"
                role="alert"
              >
                <strong class="font-bold text-base mr-4">Success!</strong>
                <span class="block text-sm sm:inline max-sm:mt-1">
                  Message sent succesful.
                </span>
              </div>
            )}
            <br></br>
          </div>
        </section>
        {/* Image Section */}
        <img
          className="lg:w-3/6 md:w-2/6 mb-5 object-cover object-center rounded"
          alt="hero"
          src={imgcontacts}
        />
      </div>

      <br></br>
      <Footer />
    </>
  );
}

export default Contact;
