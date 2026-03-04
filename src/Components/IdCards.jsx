import React from "react";  

const IdCards = ({ name, role, department, id, avatar }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg p-4 m-4">
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="text-center text-gray-600">{role}</p>
      <p className="text-center text-gray-600">{department}</p>
      <p className="text-center text-gray-500 mt-2">ID: {id}</p>
    </div>
  );
};

export default IdCards;