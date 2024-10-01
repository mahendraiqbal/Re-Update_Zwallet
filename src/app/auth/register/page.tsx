'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { Eye } from 'lucide-react'

export default function RegsiterPage() {
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Lakukan validasi login di sini
        // Jika berhasil:
        router.push("/auth/login");
      };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side - Blue section */}
      <div className="w-full md:w-1/2 bg-blue-500 p-8 flex flex-col justify-center items-center text-white">
        <div className="max-w-md">
          <h1 className="text-2xl font-bold mb-4">Zwallet</h1>
          
          <div className="relative w-64 h-96 mx-auto mb-8">
            <Image 
              src="/api/placeholder/256/384"
              alt="App screenshot"
              width={256}
              height={384}
              className="object-contain"
            />
          </div>
          
          <h2 className="text-xl font-semibold mb-4">App that Covering Banking Needs.</h2>
          
          <p className="text-sm opacity-90 mb-4">
            Zwallet is an application that focusus in banking needs for all users
            in the world. Always updated and always following world trends.
            5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold mb-2">
            Start Accessing Banking Needs
          </h2>
          <h3 className="text-lg mb-1">With All Devices and All Platforms</h3>
          <p className="text-gray-600 mb-8">With 30,000+ Users</p>
          
          <p className="text-sm text-gray-600 mb-8">
            Transfering money is easier than ever, you can access
            Zwallet wherever you are. Desktop, laptop, mobile phone?
            we cover all of that for you!
          </p>
          
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Enter your firstname"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter your lastname"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter your e-mail"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border rounded-lg"
              />
              <Eye className="absolute right-3 top-3 text-gray-400" />
            </div>
            
            <div className="text-right">
              <Link href="/forgot-password" className="text-gray-600 text-sm">
                Forgot password?
              </Link>
            </div>
            
            <button
              onClick={handleRegister}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
            >
              Register
            </button>
          </form>
          
          <p className="text-center mt-6">
            Already have an account? {' '}
            <Link href="/auth/login" className="text-blue-500 font-semibold">
              Let&apos;s Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}