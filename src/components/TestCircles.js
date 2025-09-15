// src/components/TestCircles.js
import React from "react";

export default function TestCircles() {
  return (
    <div className="fixed inset-0 z-0 bg-red-200">
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-blue-500 animate-bounce" />
    </div>
  );
}
