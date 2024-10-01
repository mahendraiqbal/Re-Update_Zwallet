/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function FeaturedItem() {
  return (
    <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="/api/placeholder/300/600" alt="Zwallet App Screenshot" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              All The <span className="text-blue-500">Great</span><br />
              Zwallet Features.
            </h2>
            <div className="space-y-6">
              <FeatureItem
                number={1}
                title="Small Fee"
                description="We only charge 5% of every success transaction done in Zwallet app."
              />
              <FeatureItem
                number={2}
                title="Data Secured"
                description="All your data is secured properly in our system and it's encrypted."
              />
              <FeatureItem
                number={3}
                title="User Friendly"
                description="Zwallet come up with modern and sleek design and not complicated."
              />
            </div>
          </div>
        </div>
      </section>
  )
}



interface FeatureItemProps {
    number: number;
    title: string;
    description: string;
  }
  
  function FeatureItem({ number, title, description }: FeatureItemProps) {
    return (
      <div className="flex items-start">
        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
          {number}
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    )
  }