import { useState, useRef, useEffect } from "react";
import ChatBot from "./Header";

export default function Navbar() {

  const [openChat, setOpenChat] = useState(false);
  const chatRef = useRef(null);

  // Outside Click Close Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpenChat(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">

      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-xl font-bold tracking-wide">
            Nandha College Portal
          </h1>

          <div className="flex items-center space-x-6 text-sm">
            <a href="/" className="hover:text-yellow-300 transition">Home</a>
            <a href="/about" className="hover:text-yellow-300 transition">About</a>
            <a href="/contact" className="hover:text-yellow-300 transition">Contact</a>

            <button
              onClick={() => setOpenChat(!openChat)}
              className="bg-white text-blue-600 px-3 py-1 rounded-full shadow hover:scale-105 transition"
            >
              💬 Chat
            </button>
          </div>

        </div>
      </nav>

      {/* Chatbox Dropdown */}
      {openChat && (
        <div
          ref={chatRef}
          className="absolute right-6 top-20 z-50 transition-all duration-300"
        >
          <ChatBot />
        </div>
      )}

    </div>
  );
}