import React from "react";

function Card({ icon, title, description, buttonText }) {
  return (
    <div className="border border-green-600 p-6 mt-7 rounded-none shadow-lg relative bg-white">
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 border-2 border-green-600 bg-white rounded-full flex justify-center items-center mx-auto">
          {icon}
        </div>
      </div>
      
      <div className="pt-16 text-left">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-none hover:bg-green-800 transition duration-300 w-full">
          <a href="/services" className="button w-button">Learn More</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
