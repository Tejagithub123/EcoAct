import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { jwtDecode } from 'jwt-decode' 

import imgsignin from "../../../src/img/engineer-plan-ecology-with-copy-space.jpg"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:8000/api/login/", {
        email: email,
        password: password,
      }) 
      .then((response) => {
        console.log(response.data); 
        const { role, id } = response.data; 
        localStorage.setItem('token', response.data.access);
        
        console.log("User role:", role);  

        if (role === 'admin') {
          navigate('/dashboard');} //dash admin
          
          if (role === 'member') {
            navigate('/image');}   //predictions 
        

            if (role === 'actor') {
              navigate(`/dashboard/user/${id}`);
            }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    
    <section className="h-full bg-white gray:bg-neutral-700">
    <Navbar />
    <div className="container h-full p-10">
      <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
        <div className="w-full">
          <div className="block rounded-lg bg-white shadow-lg">
            <div className="g-0 lg:flex lg:flex-wrap">
              {/* Left column container */}
              <div className="px-4 md:px-0 lg:w-6/12">
                <div className="md:mx-6 md:p-12">
                  <h1 className="text-3xl font-semibold text-center text-green-700 uppercase decoration-wavy">
                    Sign In
                  </h1>
                  <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="mb-2">
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
                        onChange={handleEmailChange}
                        className="block w-full px-4 py-2 mt-2 text-black  border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                    <div className="mb-2">
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
                        onChange={handlePasswordChange}
                        className="block w-full px-4 py-2 mt-2 text-black  border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                    <div className="mt-6">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-400 text-xl">
                        Sign In
                      </button>
                    </div>
                  </form>
                  <p className="mt-8 text-xl font-light text-center text-black">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-xl font-medium text-green-300 hover:underline"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
              {/* Right column container with background image */}
              <div
                className="flex items-center rounded lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                style={{
                  backgroundImage: `url(${imgsignin})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                  {/* Content inside the right column container */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Footer />
  </section>
    
  );
};

export default Login;
