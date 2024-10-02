import Link from 'next/link'
import Image from 'next/image'
import { Bell } from 'lucide-react'

export default function TopNavigation() {
  return (
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
  )
}