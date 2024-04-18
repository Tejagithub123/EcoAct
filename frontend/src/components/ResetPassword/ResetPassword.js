import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import imgreset from "../../../src/img/view-frame-with-study-items.jpg";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [emailError, setEmailError] = useState("");

  setTimeout(() => {
    setShowToast(false);
    setShowToast2(false);
  }, 3000);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation check for email format
    if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/resetpassword/",
        {
          email: email,
        }
      );
      console.log(response.data);
      setShowToast(true);
    } catch (error) {
      console.log(error);
      setShowToast2(true);
    }
  };

  return (
    <section className="h-full bg-white gray:bg-neutral-700">
      <Navbar />
      <div className="flex flex-center">
        <div className="w-full h-full p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg lg:col-span-1">
              <div className="px-6 py-12 md:px-12">
                <h1 className="text-3xl font-semibold text-center text-green-700 uppercase decoration-wavy">
                  Reset Password
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
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
                    {emailError && <p className="text-red-500">{emailError}</p>}
                  </div>
                  <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-400 text-xl">
                      Reset Password
                    </button>
                  </div>
                </form>
                {showToast && (
                  <div
                    className="bg-green-100 mt-10 text-green-800 px-4 py-4 rounded"
                    role="alert"
                  >
                    <strong className="font-bold text-base mr-4">
                      Success!
                    </strong>
                    <span className="block text-sm sm:inline max-sm:mt-1">
                      Password reset email sent!check email
                    </span>
                  </div>
                )}
                {showToast2 && (
                  <div
                    className="bg-red-300 mt-10 text-red-800 px-4 py-4 rounded"
                    role="alert"
                  >
                    <strong className="font-bold text-base mr-4">Fail!</strong>
                    <span className="block text-sm sm:inline max-sm:mt-1">
                      No user with this email.
                    </span>
                  </div>
                )}
                <p className="mt-8 text-xl font-light text-center text-black">
                  Got a new password?{" "}
                  <Link
                    to="/login"
                    className="text-xl font-medium text-green-300 hover:underline"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
            <div
              className="hidden md:block bg-cover bg-center rounded-lg lg:col-span-1 lg:rounded-l-lg lg:rounded-br-none"
              style={{
                backgroundImage: `url(${imgreset})`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ResetPassword;
