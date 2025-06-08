// From forClients.txt
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ForClients() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What to Expect in the First Session",
      answer: "Your initial session is a space to share your concerns, get to know your therapist, and discuss your goals for therapy. Sessions typically last about 50 minutes and may include an intake assessment to understand your background and needs."
    },
    {
      question: "How to Prepare for Therapy",
      answer: "Come as you are. We recommend jotting down key thoughts or experiences you'd like to share, bringing any medical or psychological reports, and ensuring privacy if attending virtually."
    },
    {
      question: "What if I miss a session?",
      answer: "We request 24 hours' notice for cancellations to avoid charges."
    },
    {
      question: "What if I feel uncomfortable?",
      answer: "Please share your discomfort; we will listen and may adjust the therapist match if needed."
    },
    {
      question: "Can I switch therapists?",
      answer: "Yes. We support continuity of care and client comfort."
    },
    {
      question: "Are my sessions recorded?",
      answer: "No. Sessions are never recorded without your explicit consent."
    },
    {
      question: "Can I attend therapy online?",
      answer: "Yes, we offer secure virtual sessions for your convenience and comfort."
    },
    {
      question: "What are the payment methods?",
      answer: "We accept UPI, debit/credit cards, and Razorpay for online payments."
    },
    {
      question: "Is therapy suitable for children or adolescents?",
      answer: "Yes, we have specialists experienced in working with various age groups including adolescents."
    }
  ];

  const testimonials = [
    {
      name: "Anonymous",
      quote: "Therapy with Idha helped me rediscover myself. The calm and non-judgmental space gave me hope again."
    },
    {
      name: "A Former Client",
      quote: "The sessions at Idha were like a mirror to my inner self. I’ve grown stronger, lighter, and more aware."
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

      <section className="px-6 md:px-12 pt-12 pb-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-700 mb-10 text-center">For Clients</h1>

        <div className="mb-16">
          <img src="https://via.placeholder.com/800x400?text=FAQs" alt="FAQs" className="rounded-xl mb-4 w-full object-cover" />
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul className="space-y-4">
            {faqs.map((faq, idx) => (
              <li key={idx} className="border-b pb-2">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left font-medium text-gray-800 hover:text-pink-700 focus:outline-none"
                >
                  {faq.question}
                </button>
                {openIndex === idx && (
                  <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-4">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <p className="italic text-gray-700 mb-3">“{t.quote}”</p>
                <p className="text-sm text-pink-600 font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-4">Ready to Begin?</h3>
        </div>
        <div className="text-center">
          <Button
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl text-lg"
            onClick={() => window.location.href = "/booking"}
          >
            Book an Appointment
          </Button>
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

