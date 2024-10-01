'use client'

import React from 'react'
import { useState } from 'react';

const testimonials = [
    {
      id: 1,
      name: "Alex Hansinburg",
      role: "Designer",
      image: "/api/placeholder/64/64",
      text: "This is the most outstanding app that I've ever try in my live, this app is such an amazing masterpiece and it's suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!"
    },
    {
      id: 2,
      name: "Alex Simatupang",
      role: "Designer",
      image: "/api/placeholder/64/64",
      text: "This is the most outstanding app that I've ever try in my live, this app is such an amazing masterpiece and it's suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!"
    },
    {
      id: 3,
      name: "Alex Hojnburg",
      role: "Designer",
      image: "/api/placeholder/64/64",
      text: "This is the most outstanding app that I've ever try in my live, this app is such an amazing masterpiece and it's suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!"
    },
    
  ];

export default function TestimonialCard() {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg relative">
      <button onClick={prevTestimonial} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
        &lt;
      </button>
      <button onClick={nextTestimonial} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full">
        &gt;
      </button>
      <div className="flex flex-col items-center text-center">
        <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
        <h3 className="font-bold text-lg">{testimonial.name}</h3>
        <p className="text-gray-500 mb-4">{testimonial.role}</p>
        <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
      </div>
    </div>
  )
}
