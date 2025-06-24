"use client"
import { motion } from 'framer-motion'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
         {/* Navigation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-full z-50 px-4 backdrop-blur-3xl bg-black/50 rounded-50 py-4 flex justify-between text-white items-center"
        >
          <div className="flex items-center">
            <div className="text-2xl font-bold hover:-rotate-180 transition-transform duration-500">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
               className="w-10 h-10 transform transition-transform duration-500 group-hover:rotate-180">
                <path d="M20 5L5 20L20 35L35 20L20 5Z" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <div className="hidden text-xl gap-20 md:flex font-serif font-extrabold items-center space-x-6 ml-28">
              <Link href={"#home"} className='hover:border-white px-3 font-serif hover:border-2 rounded-full italic'> Home </Link>
              <Link href={"#contact"} className="hover:border-white px-3 font-serif hover:border-2 rounded-full italic"> Contact </Link>
              <Link href={"#about"} className="hover:border-white px-3 font-serif hover:border-2 rounded-full italic"> About </Link>
              <Link href={"#skill"} className="hover:border-white px-3 font-serif hover:border-2 rounded-full italic "> Skills</Link>
              <Link href={"#project"} className="hover:border-white px-3 font-serif hover:border-2 rounded-full italic ">  Project </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
           
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </motion.div>

        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-lg z-9999">
            <div className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
              <button
                className="absolute top-6 right-6 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <button className="px-6 py-3 bg-gray-800/50 rounded-full">Start</button>
              <button className="px-6 py-3">Home</button>
              <button className="px-6 py-3">Contacts</button>
              <button className="px-6 py-3">Help</button>
              <button className="px-6 py-3">Docs</button>
              <button className="px-6 py-3">Register</button>
              <button className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm rounded-full">Application</button>
            </div>
          </motion.div>
        )}

    </div>
  )
}

export default Header