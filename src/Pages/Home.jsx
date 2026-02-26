export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Welcome to Nandha College of Technology
        </h2>
        <p className="text-lg max-w-2xl mx-auto">
          Empowering students with quality technical education, innovation,
          and industry-driven learning experiences.
        </p>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">🎓 5000+ Students</h3>
          <p>Providing quality education with excellent academic results.</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">🏢 95% Placement</h3>
          <p>Top companies recruit our talented students every year.</p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">🏫 50 Acres Campus</h3>
          <p>Modern infrastructure with labs, library and smart classrooms.</p>
        </div>
      </section>

    </div>
  );
}