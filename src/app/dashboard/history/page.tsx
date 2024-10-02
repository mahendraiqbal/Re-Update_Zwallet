import Image from 'next/image'
import Link from 'next/link'
import { 
  LayoutGrid, 
  ArrowUpRight, 
  PlusCircle, 
  User, 
  LogOut,
  Bell,
  Filter
} from 'lucide-react'

export default function TransactionHistory() {
  return (
    <div className="min-h-screen bg-gray-50">
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
            <Link href="/dashboard" 
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-700"
            >
              <LayoutGrid />
              <span className="hidden md:inline">Dashboard</span>
            </Link>
            <Link href="/transfer" 
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-700"
            >
              <ArrowUpRight />
              <span className="hidden md:inline">Transfer</span>
            </Link>
            <Link href="/top-up" 
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-700"
            >
              <PlusCircle />
              <span className="hidden md:inline">Top Up</span>
            </Link>
            <Link href="/profile" 
              className="flex items-center space-x-2 p-2 rounded-lg text-gray-700"
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
          <div className="bg-white rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-xl font-bold">Transaction History</h1>
              <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <Filter size={16} />
                <span>Select Filter</span>
              </button>
            </div>

            <div className="space-y-6">
              {[
                { name: 'Samuel Suhi', type: 'Accept', amount: '+Rp50.000', image: 'samuel-suhi' },
                { name: 'Netflix', type: 'Transfer', amount: '-Rp149.000', image: 'netflix' },
                { name: 'Christine Mar...', type: 'Accept', amount: '+Rp150.000', image: 'christine' },
                { name: 'Robert Chandler', type: 'Topup', amount: '+Rp249.000', image: 'robert' },
                { name: 'Samuel Suhi', type: 'Accept', amount: '+Rp50.000', image: 'samuel-suhi' },
                { name: 'Samuel Suhi', type: 'Accept', amount: '+Rp50.000', image: 'samuel-suhi' }
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                  <div className="flex items-center">
                    <Image 
                      src="/api/placeholder/56/56" 
                      alt={transaction.name}
                      width={56}
                      height={56}
                      className="rounded-lg mr-4"
                    />
                    <div>
                      <p className="font-semibold">{transaction.name}</p>
                      <p className="text-sm text-gray-500">{transaction.type}</p>
                    </div>
                  </div>
                  <span className={`font-semibold ${
                    transaction.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {transaction.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 mt-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>©2020 Zwallet. All right reserved.</p>
          <div className="flex flex-col md:flex-row md:space-x-8 items-center">
            <p>+62 5637 8882 9901</p>
            <p>contact@zwallet.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}