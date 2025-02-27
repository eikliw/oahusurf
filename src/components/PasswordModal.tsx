'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rock_Salt } from 'next/font/google';
import Image from 'next/image';

const rockSalt = Rock_Salt({ weight: '400', subsets: ['latin'] });

export default function PasswordModal() {
  const [isOpen, setIsOpen] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // Check if the user has already entered the correct password
  useEffect(() => {
    const hasAccess = localStorage.getItem('siteAccess');
    if (hasAccess === 'granted') {
      setIsOpen(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === 'surfsup') {
      // Save access to localStorage
      localStorage.setItem('siteAccess', 'granted');
      setIsOpen(false);
    } else {
      setError('Incorrect password. Try again!');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-volcanic/20 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`relative w-full max-w-md mx-auto p-8 rounded-xl bg-white shadow-2xl ${isShaking ? 'animate-shake' : ''}`}
      >
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="w-40 h-40 relative mb-4">
            <Image 
              src="/images/logo.png" 
              alt="Oahu Surf Co. Logo"
              width={160} 
              height={160}
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/160x160?text=Oahu+Surf+Co';
              }}
            />
          </div>
          
          <h2 className={`text-2xl sm:text-3xl font-bold text-ocean-blue mb-2 ${rockSalt.className}`}>
            Aloha!
          </h2>
          <p className="text-volcanic mb-6 text-center">
            This site is currently under development.
            Please enter the password to continue.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  className="w-full px-4 py-3 border border-volcanic/20 rounded-lg focus:ring-2 focus:ring-ocean-blue/50 focus:border-ocean-blue focus:outline-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-volcanic/60">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              {error && (
                <p className="mt-2 text-red-500 text-sm">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-ocean-blue hover:bg-ocean-blue/90 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ocean-blue"
            >
              Access Site
            </button>
            
            <div className="flex items-center justify-center pt-2">
              <span className="text-sm text-volcanic/60">Hint: What do you say before hitting the waves?</span>
            </div>
          </form>
          
          <div className="mt-8 flex items-center justify-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-palm"></span>
            <span className="h-2 w-2 rounded-full bg-sand"></span>
            <span className="h-2 w-2 rounded-full bg-ocean-blue"></span>
            <span className="h-2 w-2 rounded-full bg-volcanic"></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 