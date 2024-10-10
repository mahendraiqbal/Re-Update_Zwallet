'use client'

import Image from 'next/image'
import Link from 'next/link'
import TopNavigation from '@/app/components/TopNav'
import Sidebar from '@/app/components/Sidebar'
import FooterDash from '@/app/components/FooterDash'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <TopNavigation />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex flex-col items-center bg-white rounded-lg p-6">
            <Image 
              src="/api/placeholder/80/80" 
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full mb-4"
            />
            <p className="text-gray-400 text-sm mb-1">Edit</p>
            <h1 className="text-xl font-bold mb-1">Robert Chandler</h1>
            <p className="text-gray-500 mb-8">+62 813-9387-7946</p>
            
            <div className="w-full max-w-md flex flex-col gap-6">
              <Link href="/personal-information" className="w-full">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <span>Personal Information</span>
                  <ChevronRight className="text-gray-400" />
                </div>
              </Link>
              
              <Link href="/change-password" className="w-full">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <span>Change Password</span>
                  <ChevronRight className="text-gray-400" />
                </div>
              </Link>
              
              <Link href="/change-pin" className="w-full">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <span>Change PIN</span>
                  <ChevronRight className="text-gray-400" />
                </div>
              </Link>
              
              <Link href="/logout" className="w-full">
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors">
                  <span>Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <FooterDash />
    </div>
  )
}