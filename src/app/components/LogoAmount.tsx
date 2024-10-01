import React from 'react'

export default function LogoAmount() {
  return (
    <section className="py-16 px-4 bg-gray-100">
        <div className="flex justify-center items-center flex-wrap gap-8">
          <Logo name="Microsoft" />
          <Logo name="Dropbox" />
          <Logo name="H&M" />
          <Logo name="Airbnb" />
          <Logo name="Canon" />
          <Logo name="Dell" />
        </div>
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-4">Rp. 390.736.500</h2>
        <p className="text-2xl mb-2">
          <span className="text-blue-500 font-semibold">Money</span> has Been Transfered.
        </p>
        <p className="text-gray-600 mb-8">
          That amount of money has been transfered from all users. We still 
          counting and going strong!
        </p>
      </div>
    </div>
  </section>
  )
}

interface LogoProps {
    name: string;
}

function Logo({ name }: LogoProps) {
    return (
      <div className="w-16 h-8 bg-gray-200 flex items-center justify-center rounded">
        <span className="text-xs text-gray-500">{name}</span>
      </div>
    )
  }