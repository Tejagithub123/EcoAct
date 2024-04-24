import React from "react";

const FeatureCard = ({ title, description, points }) => {
  return (
    <div className="card bg-white rounded-lg shadow-md p-8 transition-transform hover:shadow-lg hover:-translate-y-1">
      <h3 className="text-xl font-bold text-green-500 mb-4">{title}</h3>
      <p className="text-base">{description}</p>
      <ul className="list-disc mt-4 space-y-2 pl-4">
        {points.map((point, index) => (
          <li key={index} className="text-sm">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 max-w-6xl mx-auto font-[sans-serif] text-gray-600">
      <FeatureCard
        title="Behavioral Ecology"
        description="Behavioral ecology explores how animals behave in response to their environment, focusing on their interactions with each other and their surroundings. It helps in understanding the adaptive significance of behaviors, their evolution, and their impact on ecological processes."
        points={[]}
      />
      <FeatureCard
        title="Impact of Human Actions on Ecosystems"
        description="Human activities have profound effects on ecosystems worldwide, leading to biodiversity loss, habitat destruction, and disruptions in ecological processes. Understanding these impacts is crucial for developing sustainable practices and mitigating environmental degradation."
        points={[]}
      />
      <FeatureCard
        title="Carbon Cycling & Sequestration"
        description="Carbon cycling refers to the movement of carbon through various reservoirs in the Earth's system, including the atmosphere, oceans, and terrestrial ecosystems. Understanding carbon dynamics is essential for addressing climate change and managing carbon stocks effectively."
        points={[]}
      />
      <FeatureCard
        title="Carbon Footprint"
        description="Carbon footprint measures the total amount of greenhouse gases emitted directly or indirectly by human activities. Minimizing carbon footprint is crucial for mitigating climate change and transitioning to a sustainable future."
        points={[]}
      />
      <FeatureCard
        title="Circular Economy"
        description="Circular economy focuses on reducing waste and maximizing the use of resources by promoting practices such as recycling, reusing, and remanufacturing. By closing the loop of production and consumption, circular economy aims to minimize environmental impact and foster economic growth in a sustainable manner."
        points={[]}
      />
      <FeatureCard
        title="Corporate Social Responsibility (CSR)"
        description="Corporate Social Responsibility (CSR) involves businesses integrating social and environmental concerns into their operations and interactions with stakeholders.Embracing CSR principles can lead to positive impacts on society, the environment, and long-term business performance."
        points={[]}
      />
    </div>
  );
};

export default FeaturesSection;
