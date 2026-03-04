import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-purple-700 text-white shadow-lg">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold tracking-wide">
          CollegeAI 🤖
        </h1>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Courses
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Placements
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            About
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </nav>

        {/* Chatbot Button */}
        <button className="bg-white text-blue-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Ask AI
        </button>

      </div>

    </header>
  );
}

export default Header;