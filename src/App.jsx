import React from "react";
import IdCard from "./Components/IdCards";

function App() {
  const employees = [
    { id: 1, name: "Monia Nijimbere", role: "Software Engineer", department: "Engineering", avatar: "https://avatars.githubusercontent.com/u/122402441?v=4" },
    { id: 2, name: "Bob Smith", role: "Designer", department: "Design", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, name: "Carol Lee", role: "Product Manager", department: "Product", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 min-h-screen p-8">
      {employees.map((employee) => (
        <IdCard
          key={employee.id}
          name={employee.name}
          role={employee.role}
          department={employee.department}
          id={employee.id}
          avatar={employee.avatar}
        />
      ))}
    </div>
  );
}

export default App;