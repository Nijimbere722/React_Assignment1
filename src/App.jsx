import React from 'react';
// 1. Import all 3 of your specific images
import idimage1 from './assets/idimage1.jpg';

import IdCards from './components/IdCards'; 

function App() {
  // 2. Assign the specific imported images to each person
  const users = [
    { 
      id: 1, 
      name: "Monia Nijimbere", 
      role: "Software Engineer", 
      department: "Engineering", 
      image: idimage1 
    },
    { 
      id: 2, 
      name: "Alice Uwineza", 
      role: "UI Designer", 
      department: "Design", 
      image: idimage1  
    },
    { 
      id: 3, 
      name: "Bonfils Ishimwe", 
      role: "Project Manager", 
      department: "Operations", 
      image: idimage1
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Companyiii ID Directory
      </h1>
      
      {/* 3. This flex container will line them up nicely */}
      <div className="flex flex-wrap justify-center gap-8">
        {users.map((user) => (
          <IdCards 
            key={user.id} 
            id={user.id}
            name={user.name} 
            role={user.role} 
            department={user.department}
            image={user.image} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;