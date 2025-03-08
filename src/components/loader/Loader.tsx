import React from "react";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute w-full h-full animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 shadow-lg"></div>
        <div className="absolute w-16 h-16 animate-spin-slow rounded-full border-4 border-transparent border-b-blue-400 border-l-blue-400 shadow-md"></div>
        <div className="w-10 h-10 bg-blue-500 rounded-full animate-pulse shadow-2xl"></div>
      </div>
    </div>
  );
}
