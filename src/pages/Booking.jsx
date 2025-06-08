// From booking.txt
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Booking() {
  const [therapy, setTherapy] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [counselor, setCounselor] = useState("");

  const therapies = [
    "Individual Therapy",
    "Couples / Family Therapy",
    "Online Therapy",
    "Group Sessions",
    "Mindfulness Workshops",
    "Journaling & Self-help Tools"
  ];

  const counselors = [
    "Anasuya Dasgupta",
    "Rahul Sharma",
    "Priya Mehta",
    "Amit Verma"
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

      <section className="px-6 md:px-12 pt-12 pb-24 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-700 mb-6 text-center">Book an Appointment</h1>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold">Select Therapy Type</label>
            <select
              value={therapy}
              onChange={(e) => setTherapy(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3"
            >
              <option value="">-- Choose Therapy --</option>
              {therapies.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Choose Preferred Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Choose Time Slot</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Select Counselor</label>
            <select
              value={counselor}
              onChange={(e) => setCounselor(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3"
            >
              <option value="">-- Choose Counselor --</option>
              {counselors.map((name, index) => (
                <option key={index} value={name}>{name}</option>
              ))}
            </select>
          </div>

          <div className="text-center pt-6">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl text-md">
              Pay Now
            </Button>
          </div>
        </form>
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

