// From resources.txt
import React from "react";
import { Button } from "@/components/ui/button";

import React from "react";
import { Button } from "@/components/ui/button";

export default function Resources() {
  const featured = {
    title: "This Week’s Featured: Mindful Evening Wind-down",
    description: "A 5-minute guided audio session to ease anxiety before bedtime.",
    link: "#",
    image: "https://via.placeholder.com/1000x500?text=Featured+Meditation",
    type: "Audio"
  };

  const categories = {
    Learn: [
      {
        title: "Mental Health Blog Articles",
        description: "Expert-written pieces on emotional regulation, resilience, burnout, and more.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Blog+Articles",
        type: "Article"
      },
      {
        title: "Emotional Wellness FAQs",
        description: "Quick answers to common emotional and psychological concerns.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Wellness+FAQs",
        type: "FAQ"
      }
    ],
    Practice: [
      {
        title: "Self-Care Guides",
        description: "Download printable step-by-step wellness planners and trackers.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Self-Care+Guides",
        type: "PDF"
      },
      {
        title: "Journaling PDFs",
        description: "Reflective prompts and templates for emotional tracking and goal-setting.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Journaling+PDFs",
        type: "PDF"
      },
      {
        title: "Weekly Reflection Sheets",
        description: "Structured templates for end-of-week mental check-ins.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Reflection+Sheets",
        type: "Worksheet"
      }
    ],
    Experience: [
      {
        title: "Guided Meditations",
        description: "Listen to calming audio sessions led by our licensed therapists.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Meditation+Audio",
        type: "Audio"
      },
      {
        title: "Breathwork Exercises",
        description: "Simple audio-led breathing exercises to reduce stress and regain focus.",
        link: "#",
        image: "https://via.placeholder.com/500x300?text=Breathwork",
        type: "Audio"
      }
    ]
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

      <section className="px-6 md:px-12 pt-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-10 text-center">Your Personal Resource Library</h1>

        <div className="rounded-2xl shadow-md overflow-hidden bg-white mb-16">
          <img src={featured.image} alt={featured.title} className="w-full object-cover h-[300px]" />
          <div className="p-6 md:flex justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-pink-700 mb-1">{featured.title}</h2>
              <p className="text-gray-600 text-sm">{featured.description}</p>
            </div>
            <a href={featured.link} className="text-white bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-xl text-sm font-medium">
              Listen Now
            </a>
          </div>
        </div>

        {Object.entries(categories).map(([section, items], idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">{section}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {items.map((item, i) => (
                <div key={i} className="rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                  <img src={item.image} alt={item.title} className="w-full h-44 object-cover rounded-t-xl" />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-md font-semibold text-pink-700">{item.title}</h3>
                      <span className="text-xs text-gray-400">{item.type}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <a href={item.link} className="inline-block text-sm text-white bg-pink-600 hover:bg-pink-700 px-4 py-1.5 rounded-md">
                      View Resource
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Found something helpful?</h3>
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
