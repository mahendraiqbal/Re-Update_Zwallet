import React from 'react'

export default function FeaturedCard() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-gray-800">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Why Choose <span className="text-blue-500">Zwallet?</span></h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We have some great features from the application and it&apos;s totally free
          to use by all users around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            }
            title="24/7 Support"
            description="We have 24/7 contact support so you can contact us whenever you want and we will respond it."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            }
            title="Data Privacy"
            description="We make sure your data is safe in our database and we will encrypt any data you submitted to us."
          />
          <FeatureCard 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            }
            title="Easy Download"
            description="Zwallet is 100% totally free to use it's now available on Google Play Store and App Store."
          />
        </div>
      </section>

      {/* Footer wave SVG remains the same */}
      {/* ... */}
    </div>
  )
}

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description } : CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}