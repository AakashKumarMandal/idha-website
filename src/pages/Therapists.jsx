// From therapists.txt
import React from "react";

import React from "react";

export default function Therapists() {
  const therapists = [
    {
      name: "Anasuya Dasgupta",
      title: "Chief Clinical Officer & Clinical Psychologist",
      bio: "Anasuya has over a decade of experience in cognitive behavioral therapy, mindfulness-based counseling, and trauma recovery. She leads the clinical team at Idha with a vision to make mental health support compassionate, personalized, and evidence-based.",
      img: "https://via.placeholder.com/200x200?text=Anasuya+Dasgupta"
    },
    {
      name: "Diya Mandal",
      title: "Therapist & Wellness Coach",
      bio: "Diya brings a holistic approach to therapy with her expertise in anxiety management, adolescent care, and integrative therapy models. Her sessions blend structure and empathy, creating a safe space for her clients to grow.",
      img: "https://via.placeholder.com/200x200?text=Diya+Mandal"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 to-white text-gray-800">
      <header className="flex items-center justify-between px-6 md:px-12 py-6 shadow-sm bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-pink-700">Idha</h1>
        <nav className="space-x-6">
          <a href="/" className="text-gray-700 hover:text-pink-600 font-medium">Home</a>
          <a href="/about" className="text-gray-700 hover:text-pink-600 font-medium">About Us</a>
          <a href="/services" className="text-gray-700 hover:text-pink-600 font-medium">Services</a>
          <a href="/therapists" className="text-gray-700 hover:text-pink-600 font-medium">Therapists</a>
          <a href="/clients" className="text-gray-700 hover:text-pink-600 font-medium">For Clients</a>
          <a href="/resources" className="text-gray-700 hover:text-pink-600 font-medium">Resources</a>
          <a href="/booking" className="text-gray-700 hover:text-pink-600 font-medium">Booking</a>
          <a href="/contact" className="text-gray-700 hover:text-pink-600 font-medium">Contact</a>
        </nav>
      </header>

      <section className="text-center px-6 md:px-12 pt-12 mb-16">
        <h1 className="text-5xl font-bold text-pink-700 mb-4">Meet Our Therapists</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Our team consists of experienced, empathetic professionals committed to supporting your mental wellness with compassion and skill.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 mb-24 max-w-6xl mx-auto">
        {therapists.map((therapist, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md text-center">
            <img
              src={therapist.img}
              alt={therapist.name}
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
            />
            <h3 className="text-2xl font-bold text-pink-700 mb-1">{therapist.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{therapist.title}</p>
            <p className="text-gray-700 text-md leading-relaxed">{therapist.bio}</p>
          </div>
        ))}
      </section>

      <footer className="bg-pink-50 py-12 px-6 md:px-12 text-center text-gray-700">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h4>
        <p>Email: support@idha.in</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Location: 123 Serenity Street, Anand Vihar, Delhi</p>
        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Idha Psychological Counseling. All rights reserved.</p>
      </footer>
    </main>
  );
}

