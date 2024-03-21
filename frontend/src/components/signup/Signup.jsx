import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar"; 
import Footer from "../footer/Footer";
import imgsignin from "../../../src/img/engineer-plan-ecology.jpg"
const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();
 
   const handleSubmit = async (event) => {
     event.preventDefault();
     await axios
       .post("http://localhost:8000/api/signup/", {
         name: name,
         email: email,
         password: password,
       })
       .then((response) => {
         console.log(response.data);
         navigate("/home");
       })
       .catch((error) => {
         console.log(error);
       });
   };
 
   return (
    <section className="h-full bg-white gray:bg-neutral-700">
      <Navbar />
      <div className="container h-full p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left column container */}
          <div className="bg-white shadow-lg rounded-lg lg:col-span-1">
            <div className="px-6 py-12 md:px-12">
              <h1 className="text-3xl font-semibold text-center text-green-700 uppercase decoration-wavy">
                Sign Up
              </h1>
              <form className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-xl font-semibold text-black"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-xl font-semibold text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="block w-full px-4 py-2 mt-2 text-black border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    required
                  />
                </div>
                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-400 text-xl">
                    Sign up
                  </button>
                </div>
              </form>
              <p className="mt-8 text-xl font-light text-center text-black">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-xl font-medium text-green-300 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
          {/* Right column container with background image */}
          <div
            className="bg-cover bg-center rounded-lg lg:col-span-1 lg:rounded-l-lg lg:rounded-br-none"
            style={{
              backgroundImage: `url(${imgsignin})`,
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </section>
  );
  
};

export default Signup;
