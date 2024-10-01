'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  LayoutGrid, 
  ArrowUpRight, 
  PlusCircle, 
  User, 
  LogOut,
  Bell,
  ArrowDown,
  ArrowUp
} from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-white p-4 flex justify-between items-center shadow-sm">
        <Link href="/" className="text-blue-600 text-xl font-bold">
          Zwallet
        </Link>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Image 
              src="/api/placeholder/32/32" 
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="ml-2 hidden md:block">
              <p className="font-semibold">Robert Chandler</p>
              <p className="text-sm text-gray-500">+62 813 9387 7946</p>
            </div>
          </div>
          <Bell className="text-gray-600" />
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 bg-white h-[calc(100vh-64px)] p-4">
          <nav className="space-y-4">
            <Link href="#" 
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                activeTab === 'dashboard' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutGrid />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <Link href="#" 
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                activeTab === 'transfer' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('transfer')}
            >
              <ArrowUpRight />
              <span className="hidden md:inline">Transfer</span>
            </Link>
            <Link href="#" 
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                activeTab === 'topup' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('topup')}
            >
              <PlusCircle />
              <span className="hidden md:inline">Top Up</span>
            </Link>
            <Link href="#" 
              className={`flex items-center space-x-2 p-2 rounded-lg ${
                activeTab === 'profile' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
              }`}
              onClick={() => setActiveTab('profile')}
            >
              <User />
              <span className="hidden md:inline">Profile</span>
            </Link>
          </nav>
          <div className="absolute bottom-4 w-16 md:w-56">
            <Link href="/login" 
              className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <LogOut />
              <span className="hidden md:inline">Logout</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Balance Card */}
          <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm opacity-90">Balance</p>
                <h2 className="text-3xl font-bold">Rp120.000</h2>
                <p className="text-sm opacity-90">+62 813-9387-7946</p>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">
                  <ArrowUpRight className="inline mr-1" size={16} />
                  Transfer
                </button>
                <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">
                  <PlusCircle className="inline mr-1" size={16} />
                  Top Up
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Chart Section */}
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between mb-4">
                <div>
                  <div className="flex items-center text-green-500 mb-2">
                    <ArrowDown className="mr-1" size={16} />
                    Income
                    <span className="ml-4 font-semibold">Rp2.120.000</span>
                  </div>
                  <div className="flex items-center text-red-500">
                    <ArrowUp className="mr-1" size={16} />
                    Expense
                    <span className="ml-4 font-semibold">Rp1.560.000</span>
                  </div>
                </div>
              </div>
              {/* Placeholder for chart - in real app, use a chart library */}
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                Chart would go here
              </div>
            </div>

            {/* Transaction History */}
            <div className="bg-white p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Transaction History</h3>
                <Link href="#" className="text-blue-600 text-sm">See all</Link>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Samuel Suhi', type: 'Accept', amount: '+Rp50.000' },
                  { name: 'Netflix', type: 'Transfer', amount: '-Rp149.000' },
                  { name: 'Christine Mar...', type: 'Accept', amount: '+Rp150.000' },
                  { name: 'Robert Chandler', type: 'Topup', amount: '+Rp249.000' }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image 
                        src="/api/placeholder/40/40" 
                        alt={transaction.name}
                        width={40}
                        height={40}
                        className="rounded-lg mr-3"
                      />
                      <div>
                        <p className="font-semibold">{transaction.name}</p>
                        <p className="text-sm text-gray-500">{transaction.type}</p>
                      </div>
                    </div>
                    <span className={transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                      {transaction.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="container mx-auto flex justify-between items-center">
          <p>©2020 Zwallet. All right reserved.</p>
          <div className="flex space-x-8">
            <p>+62 5637 8882 9901</p>
            <p>contact@zwallet.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}