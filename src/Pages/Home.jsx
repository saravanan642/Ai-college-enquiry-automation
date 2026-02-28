import React from "react";

function Home() {
  return (
    <div className="font-sans bg-gray-50">

      {/* Navbar */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">
            NIT College
          </h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Courses</a>
            <a href="#" className="hover:text-blue-600">Placements</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-purple-700 text-white relative">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-pulse">
            Shape Your Future With Excellence
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join Nandha Institute of Technology and explore innovation,
            leadership, and career success.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Apply Now
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            About Our Institution
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Established in 2012, NIT College provides world-class
            engineering education with modern labs, smart classrooms,
            and industry-focused curriculum.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt="college"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 text-center gap-6">
          <div>
            <h3 className="text-4xl font-bold">3500+</h3>
            <p>Students</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">150+</h3>
            <p>Faculty</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">95%</h3>
            <p>Placement Rate</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p>Recruiters</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {["CSE", "ECE", "Mechanical", "IT"].map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                {course}
              </h3>
              <p className="text-gray-500">
                Industry-oriented curriculum with hands-on training.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Recruiters Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">
            Our Top Recruiters
          </h2>
          <div className="flex justify-center flex-wrap gap-8 text-gray-600 font-semibold">
            <span>TCS</span>
            <span>Infosys</span>
            <span>Wipro</span>
            <span>Zoho</span>
            <span>Accenture</span>
          </div>
        </div>
      </section>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition">
          Chat Now
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2026 NIT College | All Rights Reserved
      </footer>

    </div>
  );
}

export default Home;