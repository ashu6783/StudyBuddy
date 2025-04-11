'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function DocumentsByType() {
    const [activePage, setActivePage] = useState(0);

    const allCategories = [
        'Accounting', 'Algebra', 'Analysis',
        'Anthropology', 'Archaeology', 'Chemistry Tutors',
        'Coding Tutors', 'Computer Science', 'Elementary Tutors',
        'French Tutors', 'Geometry Tutors', 'Writing Tutor',
        'Geometry Tutors', 'German Tutors', 'GMAT Tutors',
    ];

    // Adjust number of items per page based on screen size
    const getItemsPerPage = () => {
        // For client-side only
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 6; // Mobile: 2 columns × 3 rows
            if (window.innerWidth < 768) return 9; // Small tablets: 3 columns × 3 rows
            return 15; // Larger screens: 3 columns × 5 rows
        }
        return 15; // Default for SSR
    };

    const [itemsPerPage, setItemsPerPage] = useState(15);

    // Update items per page when window resizes
    useState(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        if (typeof window !== 'undefined') {
            setItemsPerPage(getItemsPerPage());
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    });

    const totalPages = Math.ceil(allCategories.length / itemsPerPage);

    const handlePrevPage = () => {
        setActivePage((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNextPage = () => {
        setActivePage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
    };

    return (
        <Card className="max-w-3xl mx-auto border-none shadow-none mb-4 sm:mb-8 px-2 sm:px-4">
            <div className="relative flex items-center justify-center mb-3 sm:mb-4">
                <h1 className="text-xl sm:text-2xl md:text-[34px] font-bold relative z-10 text-center">
                    <span className="relative inline-block">
                        <Image
                            src="/crown.svg"
                            width={28}
                            height={28}
                            alt="crown"
                            className="absolute -left-4 sm:-left-5 -top-1 sm:top-0 rotate-[-20deg] z-20 w-5 h-5 sm:w-7 sm:h-7"
                        />
                        Documents by Type
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {allCategories.slice(activePage * itemsPerPage, (activePage + 1) * itemsPerPage).map((category, index) => (
                    <Button
                        key={index}
                        variant="outline"
                        className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 sm:py-4 md:py-6 text-xs sm:text-sm truncate"
                    >
                        {category}
                    </Button>
                ))}
            </div>
            <div className="flex justify-center mt-4 sm:mt-6 items-center">
                <div className="flex gap-1 mx-2 sm:mx-4">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${index === activePage ? 'bg-blue-900' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
            <div className="flex justify-center mt-3 sm:mt-4 gap-2 sm:gap-4">
                <Button variant="outline" className="p-2 sm:p-4 bg-white" onClick={handlePrevPage}>
                    <Image src="/left-arrow.svg" width={16} height={16} alt="left" className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="outline" className="p-2 sm:p-4 bg-white" onClick={handleNextPage}>
                    <Image src="/right-arrow.svg" width={16} height={16} alt="right" className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
            </div>
        </Card>
    );
}