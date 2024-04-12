import React from "react";

function ContactForm() {
  return (
    <div className="font-sans bg-gray-50">
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
        {/* Eco Actors Section */}
        <div className="bg-[#3f3f3f] lg:h-screen lg:sticky lg:top-0">
          <div className="relative h-full">
            <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
              <h2 className="text-2xl font-bold text-white">Eco Actors</h2>
              {/* Content related to eco actors from the database */}
              {/* Example: Name, Role, Contact Information */}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="xl:col-span-2 h-max rounded-md p-8 sticky top-0">
          <h2 className="text-2xl font-bold text-[#333]">Contact Eco Actors</h2>
          <form className="mt-10">
            {/* Member Contact Form */}
            <div>
              <h3 className="text-lg font-bold text-[#333] mb-6">
                Member Details
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none"
                  />
                </div>
              </div>
              <div className="mt-6">
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-b-2 focus:border-[#333] outline-none resize-none"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="rounded-md px-6 py-3 w-full text-sm font-semibold bg-[#333] text-white hover:bg-[#222]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
