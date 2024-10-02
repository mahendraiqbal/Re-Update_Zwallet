'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowDown,
  ArrowUp,
  ArrowUpRight
} from 'lucide-react'

import TopNavigation from '@/app/components/TopNav'
import Sidebar from '@/app/components/Sidebar'
import FooterDash from '@/app/components/FooterDash'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [balance, setBalance] = useState(120000)

  const handleTopUpSuccess = (amount: number) => {
    setBalance(prevBalance => prevBalance + amount)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <TopNavigation />
      
      <div className="flex">
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          onTopUpSuccess={handleTopUpSuccess}/>

        {/* Main Content */}
        <main className="flex-1 p-6 transition-all duration-300">
          {/* Balance Card */}
          <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm opacity-90">Balance</p>
                <h2 className="text-3xl font-bold">Rp{balance.toLocaleString()}</h2>
                <p className="text-sm opacity-90">+62 813-9387-7946</p>
              </div>
              <div className="space-x-2">
                <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400">
                  <ArrowUpRight className="inline mr-1" size={16} />
                  Transfer
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

      <FooterDash />
    </div>
  )
}