import React, { useState } from "react";
import imgd from "../../img/hands-holding-recyclable-items.jpg";

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
    <div className="bg-green-500 px-8 relative font-sans">
      <div className="max-w-4xl mx-auto flex items-center justify-center text-white">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            src={imgd}
            alt="Ecology Image"
            className="h-auto md:h-full w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="ml-8 w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-4">
            Subscribe to Our Ecology Newsletter
          </h2>
          <p className="text-lg text-white mb-6">
            Subscribe to our ecology newsletter and stay up to date with the
            latest news, updates, and exclusive offers. Get valuable insights.
            Join our community today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
