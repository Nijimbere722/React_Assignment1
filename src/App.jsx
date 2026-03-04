import React from "react";
import IdCards from "./Components/IdCards";

function App() {
  const people = [
    {
      id: 1,
      name: "Monia Nijimbere",
      role: "Computer Science Student",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Software Engineer",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 3,
      name: "Jane Smith",
      role: "Designer",
      image: "https://i.pravatar.cc/150?img=7",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center gap-6 flex-wrap p-10">
      {people.map((person) => (
        <IdCards
          key={person.id}
          name={person.name}
          role={person.role}
          image={person.image}
        />
      ))}
    </div>
  );
}

export default App;