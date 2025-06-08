// From contact.txt
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for reaching out. We’ll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

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

      <section className="px-6 md:px-12 pt-12 pb-24 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-6 text-center">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-8">We’d love to hear from you! Whether you have a question, concern, or simply want to connect, send us a message below.</p>

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <div>
            <label className="block mb-1 font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-2"
            ></textarea>
          </div>

          <Button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl">
            Submit Query
          </Button>
        </form>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Prefer speaking directly?</h3>
          <a href="/booking" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl text-lg inline-block">
            Book an Appointment
          </a>
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
