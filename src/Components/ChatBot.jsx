import { useState } from "react";

/* ==============================
   FULL COLLEGE DATABASE
================================ */

const collegeDB = {

  "College Info": {
    "College Name": "Nandha College of Technology",
    "Address": "Perundurai Main Road, Erode – 638052",
    "Phone": "0424-2222525",
    "Email": "info@nct.ac.in",
    "Website": "https://www.nct.ac.in",
    "Established Year": 2001,
    "Affiliated To": "Anna University",
    "Campus Area": "50 Acres"
  },

  "Leadership": {
    "Principal": "Dr. R. Sathishkumar",
    "Chairman": "Thiru. S. Nandha Gopal",
    "Secretary": "Mr. R. Prakash",
    "Total Staff": 210
  },

  "Departments": {
    "CSE": {
      "HOD": "Dr. A. Rajendran",
      "Students": 900,
      "Faculty": 45
    },
    "ECE": {
      "HOD": "Dr. S. Umamaheswari",
      "Students": 650,
      "Faculty": 32
    },
    "EEE": {
      "HOD": "Dr. P. Arunkumar",
      "Students": 500,
      "Faculty": 28
    },
    "Mechanical": {
      "HOD": "Dr. M. Sundaram",
      "Students": 600,
      "Faculty": 30
    }
  },

  "Students": {
    "Total Students": 5000,
    "MBA Students": 350,
    "Graduation Percentage": "96%"
  },

  "Placement": {
    "Total Placed Students": 820,
    "Placement Percentage": "95%",
    "Highest Package": "12.5 LPA",
    "Average Package": "4.5 LPA",
    "Top Companies": ["TCS", "Infosys", "Wipro", "Cognizant", "HCL"]
  },

  "Fees Structure": {
    "CSE Fees": "₹92,000",
    "ECE Fees": "₹88,000",
    "MBA Fees": "₹1,10,000"
  },

  "Hostel": {
    "Capacity": 2000,
    "Boys Hostel": "Available",
    "Girls Hostel": "Available",
    "Hostel Fee": "₹60,000 per year"
  },

  "Transport": {
    "Total Buses": 45,
    "Bus Fee": "₹13,500 per year",
    "Pickup Points": ["Erode", "Perundurai", "Bhavani", "Gobichettipalayam"]
  },

  "Sports": {
    "Achievements": [
      "State Level Gold Medal 2025",
      "Inter College Champions 2024",
      "University Zone Winners"
    ]
  },

  "Events": {
    "Annual Events": [
      "TechFest",
      "National Symposium",
      "Cultural Fest",
      "Hackathon",
      "Entrepreneurship Summit",
      "Alumni Meet"
    ]
  },

  "Research": {
    "Papers Published 2025": 260,
    "Patents Filed": 25,
    "Research Labs": 10
  },

  "Infrastructure": {
    "Laboratories": 75,
    "Library Books": 80000,
    "Smart Classrooms": 45,
    "WiFi Campus": "Yes"
  },

  "Counselling Process": {
    "Steps": [
      "Register in TNEA Portal",
      "Choice Filling",
      "Seat Allotment",
      "Certificate Verification",
      "Fee Payment",
      "Admission Confirmation"
    ]
  }

};

/* ==============================
   SEARCH FUNCTION
================================ */

const searchDatabase = (obj, query, results = []) => {
  for (let key in obj) {
    const value = obj[key];

    if (key.toLowerCase().includes(query)) {
      results.push(`${key}: ${JSON.stringify(value)}`);
    }

    if (typeof value === "string" || typeof value === "number") {
      if (value.toString().toLowerCase().includes(query)) {
        results.push(`${key}: ${value}`);
      }
    }

    if (typeof value === "object") {
      searchDatabase(value, query, results);
    }
  }
  return results;
};

/* ==============================
   CHATBOT COMPONENT
================================ */

export default function ChatBot() {

  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Welcome! Choose a category or search below." }
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");

  const mainCategories = Object.keys(collegeDB);

  const handleMainClick = (category) => {
    setSelectedCategory(category);

    setMessages(prev => [
      ...prev,
      { sender: "user", text: category },
      { sender: "bot", text: `Select ${category} details:` }
    ]);
  };

  const handleSubClick = (subKey) => {
    const value = collegeDB[selectedCategory][subKey];

    let reply;

    if (typeof value === "object") {
      reply = Array.isArray(value)
        ? value.join(", ")
        : Object.entries(value)
            .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
            .join("\n");
    } else {
      reply = value;
    }

    setMessages(prev => [
      ...prev,
      { sender: "user", text: subKey },
      { sender: "bot", text: reply }
    ]);
  };

  const handleSearch = () => {
    if (!searchText.trim()) return;

    const results = searchDatabase(collegeDB, searchText.toLowerCase());

    const reply =
      results.length > 0
        ? results.join("\n")
        : "No matching data found.";

    setMessages(prev => [
      ...prev,
      { sender: "user", text: searchText },
      { sender: "bot", text: reply }
    ]);

    setSearchText("");
  };

 return (
  <div className="fixed bottom-6 right-6 w-[430px] h-[720px] 
  bg-white shadow-2xl rounded-3xl flex flex-col overflow-hidden border border-gray-200">

    {/* HEADER */}
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 
    text-white p-5 shadow-lg">
      <h2 className="font-bold text-lg tracking-wide">
        🎓 Nandha College AI Assistant
      </h2>
      <p className="text-xs opacity-80">Ask anything about the college</p>
    </div>

    {/* CHAT AREA */}
    <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">

      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.sender === "user"
            ? "justify-end"
            : "justify-start"}`}
        >
          <div
            className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] shadow-md transition-all duration-300 ${
              msg.sender === "user"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                : "bg-white text-gray-800 border border-gray-200"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}

      {/* MAIN CATEGORIES */}
      <div className="mt-4">
        <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
          Main Categories
        </p>
        <div className="flex flex-wrap gap-2">
          {mainCategories.map((cat, index) => (
            <button
              key={index}
              onClick={() => handleMainClick(cat)}
              className="px-3 py-1 text-xs rounded-full 
              bg-blue-100 text-blue-700 
              hover:bg-blue-600 hover:text-white 
              transition-all duration-300 shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SUB CATEGORIES */}
      {selectedCategory && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
            {selectedCategory} Options
          </p>
          <div className="flex flex-wrap gap-2">
            {Object.keys(collegeDB[selectedCategory]).map((sub, index) => (
              <button
                key={index}
                onClick={() => handleSubClick(sub)}
                className="px-3 py-1 text-xs rounded-full 
                bg-gray-200 text-gray-800 
                hover:bg-gray-800 hover:text-white 
                transition-all duration-300 shadow-sm"
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>

    {/* SEARCH BAR */}
    <div className="border-t bg-white p-4 flex gap-2 items-center">

      <input
        type="text"
        placeholder="🔎 Search college details..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm
        focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      />

      <button
        onClick={handleSearch}
        className="bg-gradient-to-r from-blue-600 to-purple-600 
        text-white px-4 py-2 rounded-full text-sm 
        hover:opacity-90 transition shadow-md"
      >
        Search
      </button>

    </div>

  </div>
);
}