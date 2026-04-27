import React from 'react';

const servicesData = [
  {
    title: "Web Development",
    description: "We build fast, responsive, and scalable websites and applications tailored to your business needs.",
    icon: "🌐"
  },
  {
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate processes and gain intelligent insights.",
    icon: "🤖"
  },
  {
    title: "Automation",
    description: "Streamline your workflows and reduce manual effort with smart automation tools.",
    icon: "⚡"
  },
  {
    title: "UI/UX Design",
    description: "We design user-friendly and visually appealing interfaces that enhance user experience.",
    icon: "🎨"
  }
];

export default function ServiceGrid() {
  return (
    <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
      {servicesData.map((service, index) => (
        <div 
          key={index} 
          className="p-8 transition-all duration-300 border rounded-xl bg-brand-dark border-gray-800 hover:border-brand-gold hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(242,218,96,0.15)] group"
        >
          <div className="mb-6 text-4xl transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
          <h3 className="mb-3 text-xl font-bold text-white group-hover:text-brand-gold transition-colors">{service.title}</h3>
          <p className="leading-relaxed text-gray-400">{service.description}</p>
        </div>
      ))}
    </div>
  );
}