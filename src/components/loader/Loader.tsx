import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-600 h-24 w-24 animate-spin"></div>
    </div>
  );
}
