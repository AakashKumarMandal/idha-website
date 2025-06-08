// From about.txt
import React from "react";

import React from "react";

export default function AboutUs() {
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

      <section className="text-center mb-16 px-6 md:px-12 pt-12">
        <h1 className="text-5xl font-bold mb-4 text-pink-700">About Idha</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Rooted in the Sanskrit word meaning "well-being" or "inner light," Idha is more than a name—it's a philosophy of compassionate mental health care. We are here to walk alongside you on your journey of emotional healing and personal growth.
        </p>
      </section>

      <section className="mb-20 grid md:grid-cols-2 gap-8 items-center px-6 md:px-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md text-gray-700 max-w-4xl">
            At Idha, our mission is to make therapy accessible, inclusive, and empowering. We believe every individual deserves a safe, confidential space to express themselves and navigate life’s challenges with the guidance of experienced professionals.
          </p>
          <h2 className="text-3xl font-semibold mt-12 mb-4">Our Vision</h2>
          <p className="text-md text-gray-700 max-w-4xl">
            We envision a world where mental well-being is nurtured with the same attention as physical health. Through a blend of evidence-based practices, empathy, and innovative tools, we aim to foster a mentally resilient and emotionally connected community.
          </p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/400x600?text=Healing+Illustration"
            alt="Healing illustration for mission and vision"
            className="rounded-2xl mx-auto"
          />
        </div>
      </section>

      <section className="mb-20 px-6 md:px-12">
        <h2 className="text-3xl font-semibold mb-6 text-center">Meet the Founders</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto text-center">
          <div>
            <img
              src="https://via.placeholder.com/150?text=Dr.+Akash+Kumar+Mandal"
              alt="CEO"
              className="rounded-2xl mx-auto w-40 h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">Dr. Akash Kumar Mandal</h3>
            <p className="text-sm text-gray-600">Founder & CEO</p>
            <p className="mt-2 text-gray-700">
              A visionary leader in the field of smart systems and wellness technologies, Dr. Mandal combines deep scientific insight with a passion for creating inclusive platforms for mental health support.
            </p>
          </div>

          <div>
            <img
              src="https://via.placeholder.com/150?text=Anasuya+Dasgupta"
              alt="CCO"
              className="rounded-2xl mx-auto w-40 h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold">Anasuya Dasgupta</h3>
            <p className="text-sm text-gray-600">Co-founder, Chief Clinical Officer & Head of Clinical Operations</p>
            <p className="mt-2 text-gray-700">
              A dedicated clinical psychologist with extensive experience in the therapies we offer, Anasuya ensures that every client at Idha receives compassionate, evidence-based care tailored to their needs.
            </p>
          </div>
        </div>
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

