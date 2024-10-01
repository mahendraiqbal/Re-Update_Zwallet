import React from 'react'
import TestimonialCard from './TestimonialCard'

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">
            What Users are <span className="text-blue-500">Saying.</span>
          </h2>
          <p className="text-center text-gray-600 mb-12">
            We have some great features from the application and it&apos;s totally free 
            to use by all users around the world.
          </p>
          <TestimonialCard />
        </div>
      </section>
  )
}
