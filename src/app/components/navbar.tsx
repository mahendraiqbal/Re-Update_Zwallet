/* eslint-disable @next/next/no-img-element */
'use client'
import Head from 'next/head'
import React from "react";
import Link from 'next/link';
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col text-white">
      <Head>
        <title>Awesome App For Saving Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Zwallet</div>
        <button 
          className="md:hidden w-8 h-8 flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <nav className={`
          ${menuOpen ? 'flex' : 'hidden'} 
          md:flex flex-col md:flex-row 
          absolute md:relative top-16 md:top-0 
          left-0 right-0 
          bg-blue-600 md:bg-transparent
          p-4 md:p-0
        `}>
          <Link href="/auth/login">
            <button className="my-2 md:mr-4 hover:underline">Login</button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-opacity-90">Sign Up</button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-4 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Awesome App</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">For Saving Time.</h2>
        <p className="mb-8 max-w-md mx-auto">
          We bring you a mobile app for banking problems that
          oftenly wasting much of your times.
        </p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90">
          Try It Free
        </button>
      </main>

      <div className="mt-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,218.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
