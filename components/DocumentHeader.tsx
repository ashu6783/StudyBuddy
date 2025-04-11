'use client';

import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { useState } from 'react';

export default function DocumentHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="bg-purple-600 min-h-[400px] md:h-[500px] lg:h-[350px] pt-6">
            <div className="max-w-6xl mx-auto px-4">
                <header className="py-3 md:py-4 bg-white rounded-3xl flex justify-between items-center shadow-md relative">
                    <div className="flex items-center ml-2 md:ml-4">
                        <Image src="/logo.svg" width={80} height={80} alt="logo" className="w-16 md:w-20 lg:w-24" />
                    </div>
                    <button
                        className="md:hidden mr-4 p-1"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {/* <Menu size={24} /> */}
                    </button>
                    <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-wrap mr-4">
                        <a href="#" className="text-black hover:text-purple-600 text-sm lg:text-base">Find Tutor</a>
                        <a href="#" className="text-black hover:text-purple-600 text-sm lg:text-base">Become Tutor</a>
                        <a href="#" className="text-black hover:text-purple-600 text-sm lg:text-base">Sign In</a>
                        <Button className="bg-black text-white hover:bg-gray-800 rounded-full text-xs lg:text-sm">
                            Get Started For Free
                        </Button>
                    </div>
                    {mobileMenuOpen && (
                        <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl mt-1 py-4 px-6 flex flex-col gap-4 z-10 md:hidden">
                            <a href="#" className="text-black hover:text-purple-600 py-2">Find Tutor</a>
                            <a href="#" className="text-black hover:text-purple-600 py-2">Become Tutor</a>
                            <a href="#" className="text-black hover:text-purple-600 py-2">Sign In</a>
                            <Button className="bg-black text-white hover:bg-gray-800 rounded-full w-full">
                                Get Started For Free
                            </Button>
                        </div>
                    )}
                </header>
            </div>

            <main className="w-full px-4 md:px-12 pt-6 md:pt-12 flex flex-col md:flex-row items-center justify-between">
                <div className="w-full  mb-8 md:mb-0 text-center md:text-left">
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                        Lorem ipsum dolor sit amet consectetur. Risus augue sit vestibulum convallis vel euismod.
                    </h1>

                    <div className="relative w-full max-w-sm flex pt-7  space-x-9 mx-auto md:mx-0 md:max-w-md">
                        <div className='flex'>
                            <p>Document Type:</p><strong> Thesis</strong>
                        </div>
                        <div className='flex'>
                            <p>Subject Area:</p><strong> Management</strong>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}