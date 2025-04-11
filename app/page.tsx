'use client';

import { useState, useEffect } from 'react';
import HeroSection from '@/components/Hero-Section';
import DocumentsByType from '@/components/DocumentsByType';
import AcademicFilterForm from '@/components/AcademicFilterForm';
import SmallCard from '@/components/SmallCard';
import { Button } from '@/components/ui/button';
import { documents } from '@/lib/data';
import CustomOrderForm from '@/components/CustomOrderForm';
import Image from 'next/image';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';


export default function HomePage() {


  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    type: 'all',
    subject: 'accounting',
    academicLevel: 'any',
    wordCount: [275, 550000] as [number, number],
  });
  const [filteredDocuments, setFilteredDocuments] = useState(documents);
  const [displayedDocuments, setDisplayedDocuments] = useState<typeof documents>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/documents');
      const data = await response.json();
      setFilteredDocuments(data);
    } catch (error) {
      console.error('Error fetching documents:', error);
      setFilteredDocuments(documents);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters({ ...filters, ...newFilters });
    setCurrentPage(1);
  };

  const applyFiltersAndSearch = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        type: filters.type,
        subject: filters.subject,
        academicLevel: filters.academicLevel,
        minWords: filters.wordCount[0].toString(),
        maxWords: filters.wordCount[1].toString(),
      });
      const response = await fetch(`/api/documents?${params.toString()}`);
      const data = await response.json();
      setFilteredDocuments(data);
      if (window.innerWidth < 1024) {
        setShowFilters(false);
      }
    } catch (error) {
      console.error('Error applying filters:', error);
      setFilteredDocuments(documents);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedDocuments(filteredDocuments.slice(startIndex, endIndex));
  }, [currentPage, filteredDocuments]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const handleDocumentClick = (doc: typeof documents[number]) => {
    window.location.href = `/document-details?id=${doc.id}`;
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <div className="justify-center relative mb-6 sm:mb-10 flex flex-col items-center">
          <VelocityScroll className="text-lg sm:text-xl font-semibold text-[#9e1eaa] mb-2 sm:mb-4">
            Expert Buddy Student Page
          </VelocityScroll>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-6 sm:mt-10 relative inline-block text-center">
            <span className="relative inline-block">
              <Image
                src="/crown.svg"
                width={30}
                height={30}
                alt="crown"
                className="absolute -top-4 left-[2px] -translate-x-1/2 hidden sm:block"
              />
              Find
            </span>{" "}
            Writing Inspiration in Our Data Base
          </h2>


        </div>

        <div className="lg:hidden mb-4 flex justify-center">
          <Button
            onClick={toggleFilters}
            className="w-full max-w-md bg-purple-600 hover:bg-purple-700 text-white"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block lg:w-1/3 order-1 lg:order-2`}>
            <AcademicFilterForm
              filters={filters}
              onFilterChange={handleFilterChange}
              onApplyFilters={applyFiltersAndSearch}
            />
          </div>

          <div className="lg:w-2/3 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {displayedDocuments.length > 0 ? (
                displayedDocuments.map((doc) => (
                  <div key={doc.id} className="w-full">
                    <SmallCard
                      title={doc.title}
                      content={doc.content}
                      wordCount={doc.wordCount}
                      pageCount={doc.pageCount}
                      onClick={() => handleDocumentClick(doc)}
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-1 sm:col-span-2 text-center py-6 sm:py-10">
                  <p className="text-gray-500">
                    No documents found matching your criteria.
                  </p>
                </div>
              )}
            </div>

            {filteredDocuments.length > 0 && (
              <div className="flex justify-center items-center flex-wrap mt-6 sm:mt-8 space-x-1 sm:space-x-2">
                <Button onClick={() => goToPage(1)} disabled={currentPage === 1} variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm mb-2">
                  « First
                </Button>
                <Button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm mb-2">
                  ‹ Back
                </Button>
                {Array.from({ length: Math.min(3, totalPages) }).map((_, i) => {
                  let pageNum;
                  if (totalPages <= 3) pageNum = i + 1;
                  else if (currentPage <= 2) pageNum = i + 1;
                  else if (currentPage >= totalPages - 1) pageNum = totalPages - 2 + i;
                  else pageNum = currentPage - 1 + i;
                  if (pageNum <= totalPages) {
                    return (
                      <Button
                        key={pageNum}
                        onClick={() => goToPage(pageNum)}
                        variant={currentPage === pageNum ? 'default' : 'outline'}
                        className={`w-6 h-6 sm:w-8 sm:h-8 p-0 mb-2 ${currentPage === pageNum ? 'bg-purple-600 text-white' : ''}`}
                      >
                        {pageNum}
                      </Button>
                    );
                  }
                  return null;
                })}
                <Button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm mb-2">
                  Next ›
                </Button>
                <Button onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages} variant="outline" className="px-2 sm:px-3 py-1 text-xs sm:text-sm mb-2">
                  Last »
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-6xl mx-auto pt-6 sm:pt-8 pb-4">
          <div className="w-full flex justify-center sm:px-4">
            <CustomOrderForm />
          </div>
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="w-full px-2 sm:px-4">
              <DocumentsByType />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
