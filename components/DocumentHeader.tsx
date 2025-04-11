'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { MagicCard } from './magicui/magic-card';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type DocumentHeaderProps = {
  documentType: string;
  subject: string;
};

export default function DocumentHeader({ documentType, subject }: DocumentHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const signedIn = localStorage.getItem('isSignedIn') === 'true';
    setIsSignedIn(signedIn);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('isSignedIn');
    setIsSignedIn(false);
    router.push('/signin');
  };

  return (
    <div className="relative min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[350px] pt-6 bg-[#a414d5] overflow-hidden">
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
            <Link href="/" className="flex items-center ml-2 md:ml-4">
              <Image src="/logo.svg" width={80} height={80} alt="logo" className="w-12 sm:w-16 md:w-20 lg:w-24" />
            </Link>
            <button
              className="md:hidden mr-3 sm:mr-4 p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-3 lg:gap-6 flex-wrap mr-3 sm:mr-4">
              <a href="#" className="text-black hover:text-purple-600 text-sm lg:text-base">Find Tutor</a>
              <a href="#" className="text-black hover:text-purple-600 text-sm lg:text-base">Become Tutor</a>

              {isSignedIn ? (
                <Button
                  onClick={handleSignOut}
                  className="bg-black text-white hover:bg-gray-800 rounded-full text-xs lg:text-sm"
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <a href="/signin" className="text-black hover:text-purple-600 text-sm lg:text-base">Sign In</a>
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full text-xs lg:text-sm">
                    Get Started For Free
                  </Button>
                </>
              )}
            </div>
          </header>

          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl mt-1 py-3 px-4 flex flex-col gap-3 z-20 md:hidden transition-all duration-300 ease-in-out">
              <a href="#" className="text-black hover:text-purple-600 py-2">Find Tutor</a>
              <a href="#" className="text-black hover:text-purple-600 py-2">Become Tutor</a>

              {isSignedIn ? (
                <Button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="bg-black text-white hover:bg-gray-800 rounded-full w-full"
                >
                  Sign Out
                </Button>
              ) : (
                <>
                  <a href="/signin" className="text-black hover:text-purple-600 py-2">Sign In</a>
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-full w-full">
                    Get Started For Free
                  </Button>
                </>
              )}
            </div>
          )}
        </MagicCard>

        {/* Main Content */}
        <main className="w-full px-3 sm:px-4 md:px-6 lg:px-12 pt-4 sm:pt-6 md:pt-8 lg:pt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full mb-6 md:mb-0 text-center md:text-left">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
              Lorem ipsum dolor sit amet consectetur. Risus augue sit vestibulum convallis vel euismod.
            </h1>

            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md pt-4 sm:pt-6 mx-auto md:mx-0">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-9">
                <div className="flex flex-wrap items-center justify-center sm:justify-start">
                  <p className="text-white mr-2 text-sm sm:text-base">Document Type:</p>
                  <strong className="text-white text-sm sm:text-base capitalize">{documentType}</strong>
                </div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start">
                  <p className="text-white mr-2 text-sm sm:text-base">Subject Area:</p>
                  <strong className="text-white text-sm sm:text-base capitalize">{subject}</strong>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
