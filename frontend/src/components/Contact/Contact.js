import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgcontact from "../../../src/img/top-view-plants-cap-frame.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        {/* Ecology Initiatives Section */}
        <section
          className="text-gray-600 body-font scroll-smooth"
          id="ecology-initiatives"
        >
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-96 lg:w-96 xl:w-96 mx-auto transform transition duration-500 hover:scale-105">
              <div className="px-6 py-4">
                <h1 className="text-gray-900 font-bold text-xl mb-2">
                  Ecology Initiatives
                </h1>
                <p className="text-gray-700 text-base">
                  Here you can provide information about various ecology
                  initiatives, their objectives, achievements, and how people
                  can get involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="text-gray-600 body-font" id="events">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-96 lg:w-96 xl:w-96 mx-auto transform transition duration-500 hover:scale-105">
              <div className="px-6 py-4">
                <h1 className="text-gray-900 font-bold text-xl mb-2">Events</h1>
                <p className="text-gray-700 text-base">
                  This section can showcase upcoming ecology-related events,
                  workshops, seminars, or campaigns happening in Tunisia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Actors Section */}
        <section className="text-gray-600 body-font" id="actors">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-80 md:w-96 lg:w-96 xl:w-96 mx-auto transform transition duration-500 hover:scale-105">
              <div className="px-6 py-4">
                <h1 className="text-gray-900 font-bold text-xl mb-2">Actors</h1>
                <p className="text-gray-700 text-base">
                  Highlight various organizations, groups, or individuals
                  actively involved in ecological initiatives in Tunisia.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*form section*/}

      <div className="flex px-4">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col lg:flex-row-reverse">
          <img
            className="lg:w-5/6 md:w-5/6 w-5/6 mb-5 object-cover object-center rounded lg:mr-10"
            alt="hero"
            src={imgcontact}
          />
        </div>
        {/* To align to the right with some padding */}
        <section className="text-gray-600 body-font" id="contact-form">
          <div className="container mx-auto flex items-center justify-center flex-col">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Contact Us
            </h1>
            <p className="mb-8 leading-relaxed">
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
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
