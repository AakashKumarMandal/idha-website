// From services.txt
import React from "react";
import { Button } from "@/components/ui/button";

import React from "react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Individual Therapy",
      desc: "Explore your thoughts, emotions, and behaviors in a one-on-one setting with a trained therapist who will guide you through challenges such as anxiety, depression, grief, and personal development.",
      img: "https://via.placeholder.com/300x200?text=Individual+Therapy"
    },
    {
      title: "Couples / Family Therapy",
      desc: "Work through relationship difficulties and communication breakdowns with a focus on creating understanding, resolving conflicts, and nurturing bonds among partners or family members.",
      img: "https://via.placeholder.com/300x200?text=Couples+Therapy"
    },
    {
      title: "Online Therapy",
      desc: "Receive the same quality care as in-person sessions from the comfort and privacy of your home. Ideal for those with mobility concerns or busy schedules.",
      img: "https://via.placeholder.com/300x200?text=Online+Therapy"
    },
    {
      title: "Group Sessions",
      desc: "Join small, supportive groups led by a therapist to share experiences and insights with others facing similar life challenges, such as stress management or recovery support.",
      img: "https://via.placeholder.com/300x200?text=Group+Sessions"
    },
    {
      title: "Mindfulness Workshops",
      desc: "Learn practical mindfulness techniques to reduce stress, improve focus, and cultivate a more peaceful and present state of mind through guided workshops.",
      img: "https://via.placeholder.com/300x200?text=Mindfulness+Workshops"
    },
    {
      title: "Journaling & Self-help Tools",
      desc: "Access structured journals, worksheets, and downloadable exercises to deepen your self-awareness and continue your healing journey between sessions.",
      img: "https://via.placeholder.com/300x200?text=Self-help+Tools"
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
        <h1 className="text-5xl font-bold text-pink-700 mb-4">Our Services</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          At Idha, our therapeutic offerings are designed to nurture emotional resilience and restore mental clarity in ways that align with your unique needs.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-12 mb-24">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col md:flex-row gap-6 items-center">
            <img src={service.img} alt={service.title} className="w-full md:w-48 h-32 object-cover rounded-lg" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-pink-700 mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.desc}</p>
              <Button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-xl text-sm">
                Book an Appointment
              </Button>
            </div>
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

