import React from "react";

function IdCards({ name, role, image }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default IdCards;