// From home.txt
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MessageSquare } from "lucide-react";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-100 to-white">
      <header className="flex items-center justify-between p-6 shadow-sm bg-white sticky top-0 z-50">
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

      <section className="text-center mb-16 p-6 md:p-12">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6 leading-tight">
          Healing Begins with a Conversation
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Rediscover your inner peace and emotional balance through empathetic, confidential, and personalized counseling with Idha.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-pink-600 hover:bg-pink-700 text-white">
            Book a Session Now
          </Button>
          <Button variant="outline" className="text-lg px-8 py-4 rounded-2xl border-pink-600 text-pink-600 hover:bg-pink-50">
            Explore Our Therapists
          </Button>
        </div>
      </section>

      <section className="px-6 md:px-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Therapy Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Individual Therapy", "Couples / Family Therapy", "Online Therapy", "Group Therapy", "Mindfulness Workshops", "Journaling & Self-help Tools"].map((therapy, index) => (
            <Card key={index} className="rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2 text-pink-700">{therapy}</h3>
                <p className="text-gray-600 text-sm">
                  Discover how {therapy.toLowerCase()} can help you find clarity, connection, and peace in your life.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-10 px-6 md:px-12">
        <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-5 animate-pulse" />
            <h2 className="text-2xl font-semibold mb-3">Heartfelt Therapy</h2>
            <p className="text-gray-600 text-md">
              Each session is crafted with deep empathy and tailored strategies to help you build resilience and emotional wellness.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <Calendar className="w-12 h-12 text-pink-600 mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3">Flexible Scheduling</h2>
            <p className="text-gray-600 text-md">
              Seamlessly schedule your appointments at your convenience. Morning, evening, or weekend – we’re here when you need us.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardContent className="p-8 text-center">
            <MessageSquare className="w-12 h-12 text-pink-600 mx-auto mb-5" />
            <h2 className="text-2xl font-semibold mb-3">Safe & Private Space</h2>
            <p className="text-gray-600 text-md">
              Your comfort is our priority. Engage in therapy in a non-judgmental, private setting that respects your confidentiality.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-20 text-center px-6 md:px-12">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Idha?</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Because your mental well-being deserves more than just attention—it deserves compassionate care. Our mission is to guide you
          towards clarity, courage, and calm through every step of your healing journey.
        </p>
      </section>

      <section className="mt-20 px-6 md:px-12">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Client Testimonials</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {["Idha helped me through my darkest times. The kindness and professionalism I experienced were unmatched.",
            "Therapy sessions at Idha gave me the tools to manage my anxiety and rebuild my confidence.",
            "Highly recommend Idha for anyone seeking peace and clarity. The therapists genuinely care!"].map((quote, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-md p-6 text-gray-700 italic">
                “{quote}”
              </div>
          ))}
        </div>
      </section>

      <section className="mt-20 px-6 md:px-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">A Glimpse Into Our Healing Space</h3>
        <p className="text-gray-600 mb-6">See where your journey to healing begins</p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <img src="https://via.placeholder.com/400x250?text=Therapy+Room" alt="Therapy Room" className="rounded-xl shadow-md" />
          <video controls className="rounded-xl shadow-md max-w-md">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <footer className="bg-pink-50 mt-24 py-12 px-6 md:px-12 text-center text-gray-700">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h4>
        <p>Email: support@idha.in</p>
        <p>Phone: +91-XXXXXXXXXX</p>
        <p>Location: 123 Serenity Street, Anand Vihar, Delhi</p>
        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Idha Psychological Counseling. All rights reserved.</p>
      </footer>
    </main>
  );
}

