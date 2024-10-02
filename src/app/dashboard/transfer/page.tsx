'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
  Search
} from 'lucide-react'
import TopNavigation from '@/app/components/TopNav'
import Sidebar from '@/app/components/Sidebar'
import FooterDash from '@/app/components/FooterDash'

import { useState } from 'react'

export default function TransferPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <TopNavigation />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg p-6">
            <h1 className="text-xl font-bold mb-6">Search Receiver</h1>
            
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text"
                placeholder="Search receiver here"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-4">
              {[
                { name: 'Samuel Suhi', phone: '+62 813-8492-9994', image: 'samuel' },
                { name: 'Monna Tann', phone: '+62 812-4343-6731', image: 'monna' },
                { name: 'Jessica Keen', phone: '+62 811-3452-5252', image: 'jessica' },
                { name: 'Michael Le', phone: '+62 810-4224-4613', image: 'michael' }
              ].map((contact, index) => (
                <Link href={`/transfer/${contact.name.toLowerCase().replace(' ', '-')}`} key={index}>
                  <div className="flex items-center p-4 hover:bg-gray-50 rounded-lg cursor-pointer">
                    <Image 
                      src="/api/placeholder/56/56" 
                      alt={contact.name}
                      width={56}
                      height={56}
                      className="rounded-lg mr-4"
                    />
                    <div>
                      <p className="font-semibold">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.phone}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <FooterDash />
    </div>
  )
}