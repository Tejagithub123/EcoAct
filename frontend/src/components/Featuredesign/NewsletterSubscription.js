import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you can add your logic to submit the email to the Django API
    console.log("Submitting email:", email);
    // Clear the input field after submission
    setEmail("");
  };

  return (
    <div className="bg-green-500  py-20 px-6 relative font-sans">
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
        <div className="my-6">
          <p className="text-base text-white">
            Subscribe to our newsletter and stay up to date with the latest
            news, updates, and exclusive offers. Get valuable insights. Join our
            community today!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="max-w-3xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center rounded shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none"
              value={email}
              onChange={handleInputChange}
              required
            />
            <button
              type="submit"
              className="bg-[#a91079] rounded hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
