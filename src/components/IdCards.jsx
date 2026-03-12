import React from "react";

function IdCards({ id, name, role, department, image }) {
  return (
    // Changed: Horizontal layout, dark slate background, and smoother borders
    <div className="flex items-center gap-5 bg-slate-900 text-white p-5 rounded-xl shadow-2xl w-[350px] border border-slate-700 transition-all hover:border-indigo-500 group">
      
      {/* 1. Profile Picture - Kept on the left for a "Badge" feel */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ring-2 ring-slate-700 group-hover:ring-indigo-500"
        />
        {/* Decorative "Online" status dot */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full"></div>
      </div>

      {/* 2. Text Info - Using better typography */}
      <div className="flex-1">
        <div className="mb-2">
          <h2 className="text-lg font-bold leading-tight tracking-tight">{name}</h2>
          <p className="text-xs font-medium text-indigo-400 uppercase tracking-widest">{role}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-bold">Dept</p>
            <p className="text-xs text-slate-300">{department}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-500 uppercase font-bold">ID No.</p>
            <p className="text-xs font-mono text-slate-300">#00{id}</p>
          </div>
        </div>
      </div>

      {/* 3. Vertical Side Bar for "Official" look */}
      <div className="bg-indigo-600 w-1.5 h-16 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default IdCards