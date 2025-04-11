'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import { useTheme } from 'next-themes';
import { MagicCard } from './magicui/magic-card';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleGetStarted = () => {
    window.location.href = '/signup';
  };

  return (
    <div className="relative min-h-[400px] md:h-[500px] lg:h-[500px] pt-6 bg-[#a414d5] overflow-hidden">
      {/* Background pattern image */}
      <Image
        src="/pattern.svg"
        alt="Pattern background"
        fill
        className="object-cover opacity-20 pointer-events-none select-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header with MagicCard */}
        <MagicCard
           gradientColor={theme === 'dark' ? '#5D2EFF' : '#A414D5'}
          className="rounded-3xl shadow-md p-2 md:p-4 mb-4"
        >
          <header className="flex justify-between items-center relative z-10 bg-white rounded-3xl px-2 md:px-4 py-3 md:py-4">
            <div className="flex items-center ml-2 md:ml-4">
              <Image
                src="/logo.svg"
                width={80}
                height={80}
                alt="Buddy Logo"
                className="w-16 md:w-20 lg:w-24"
              />
            </div>
            <button
              className="md:hidden mr-4 p-1 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <Menu size={24} className={mobileMenuOpen ? 'text-purple-600' : 'text-black'} />
            </button>
            <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-wrap mr-4">
              <a href="/find-tutor" className="text-black hover:text-purple-600 text-sm lg:text-base">
                Find Tutor
              </a>
              <a href="/become-tutor" className="text-black hover:text-purple-600 text-sm lg:text-base">
                Become Tutor
              </a>
              <a href="/signin" className="text-black hover:text-purple-600 text-sm lg:text-base">
                Sign In
              </a>
              <Button
                onClick={handleGetStarted}
                className="bg-black text-white hover:bg-gray-800 rounded-full text-xs lg:text-sm"
              >
                Get Started For Free
              </Button>
            </div>
          </header>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl mt-1 py-4 px-6 flex flex-col gap-4 z-20 md:hidden transition-all duration-300 ease-in-out">
              <a
                href="/find-tutor"
                className="text-black hover:text-purple-600 py-2"
                onClick={toggleMobileMenu}
              >
                Find Tutor
              </a>
              <a
                href="/become-tutor"
                className="text-black hover:text-purple-600 py-2"
                onClick={toggleMobileMenu}
              >
                Become Tutor
              </a>
              <a
                href="/signin"
                className="text-black hover:text-purple-600 py-2"
                onClick={toggleMobileMenu}
              >
                Sign In
              </a>
              <Button
                onClick={() => {
                  handleGetStarted();
                  toggleMobileMenu();
                }}
                className="bg-black text-white hover:bg-gray-800 rounded-full w-full"
              >
                Get Started For Free
              </Button>
            </div>
          )}
        </MagicCard>

        {/* Hero Content */}
        <main className="w-full px-4 md:px-12 pt-6 md:pt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
              Accounting Homework
              <br />
              Samples & Study Documents
            </h1>
            <p className="text-white/90 text-sm md:text-base mb-4 md:mb-6 max-w-md mx-auto md:mx-0">
              Get Access To Our Online Database Of Accounting Writing Samples.
            </p>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto md:mx-0">
              <Input
                placeholder="Find any type of work, topic, etc."
                className="pl-4 pr-20 py-5 md:py-6 h-10 md:h-12 rounded-full bg-white text-gray-700 w-full"
              />
              <Button className="absolute top-1/2 transform -translate-y-1/2 right-1 bg-black hover:bg-gray-800 rounded-full h-8 md:h-9 text-xs md:text-sm">
                <Search width={14} height={14} className="text-white mr-1" />
                Search
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <Image
              src="/cover_img.svg"
              width={350}
              height={350}
              alt="Students with laptop"
              className="object-contain w-64 sm:w-72 md:w-80 lg:w-96"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
