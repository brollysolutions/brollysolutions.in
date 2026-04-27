import React from 'react';

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Developed a scalable online store with secure payment integration and real-time inventory management.",
    category: "Web Development"
  },
  {
    title: "AI Chatbot",
    description: "Built an intelligent, natural language processing chatbot for 24/7 automated customer support.",
    category: "AI Solutions"
  },
  {
    title: "Business Dashboard",
    description: "Created comprehensive analytics dashboards for tracking KPIs and making data-driven decisions.",
    category: "Data & Automation"
  }
];

export default function ProjectGrid() {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project, index) => (
        <div 
          key={index} 
          className="flex flex-col h-full overflow-hidden transition-all duration-300 border rounded-xl bg-brand-dark border-gray-800 hover:border-brand-gold hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(242,218,96,0.15)] group"
        >
          {/* Top accent line */}
          <div className="h-1 w-full bg-gray-800 group-hover:bg-brand-gold transition-colors duration-300"></div>
          
          <div className="p-8 flex flex-col flex-grow">
            <span className="text-xs font-bold tracking-wider uppercase text-brand-gold mb-3">
              {project.category}
            </span>
            <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-brand-gold-hover transition-colors">
              {project.title}
            </h3>
            <p className="leading-relaxed text-gray-400 flex-grow">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}