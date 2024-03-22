import React from "react";

const WebsiteFAQSection = () => {
  return (
    <div className="bg-white p-8 font-sans">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-300">
          <h2 className="text-3xl font-extrabold text-green-600">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-xl">
            Explore our comprehensive FAQ to find answers to common queries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          <FAQItem
            question="How do I sign up?"
            answer="Signing up is easy! Simply click on the 'Sign Up' button and follow the on-screen instructions to create your account."
          />
          <FAQItem
            question="How can I become an ecological actor?"
            answer="Becoming an ecological actor with an ecological approach involves collaborating with other stakeholders to promote sustainable practices and environmental initiatives."
          />
          <FAQItem
            question="How can I collaborate with other stakeholders?"
            answer="Collaborating with other stakeholders involves joining forces with like-minded individuals and organizations to collectively address environmental challenges and implement impactful solutions."
          />
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="bg-white 50 p-6 rounded-lg border">
      <h3 className="text-2xl font-semibold text-green-700 mb-2">{question}</h3>
      <p className="text-gray-600 text-base">{answer}</p>
    </div>
  );
};

export default WebsiteFAQSection;
