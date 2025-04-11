'use client';

import SmallCard from '@/components/SmallCard';
import { useState, useEffect } from 'react';

interface Document {
  id: number;
  title: string;
  content: string;
  wordCount: number;
  pageCount: number;
  type: string;
  subject: string;
  academicLevel: string;
}

interface StudyBankSectionProps {
  displayedDocuments: Document[];
  activeTab: 'unlocked' | 'uploaded';
  onDocumentClick: (doc: Document) => void;
}

export default function StudyBankSection({
  displayedDocuments,
  activeTab,
  onDocumentClick,
}: StudyBankSectionProps) {
  const [filteredDocs, setFilteredDocs] = useState<Document[]>(displayedDocuments);

  useEffect(() => {
    // Simulate filtering based on tab
    setFilteredDocs(
      displayedDocuments.filter((doc) =>
        activeTab === 'unlocked' ? doc.subject === 'english' : doc.subject !== 'english'
      )
    );
  }, [activeTab, displayedDocuments]);

  return (
    <div>
      <h4 className="text-lg font-semibold mb-4">Result for &quot;English&quot;</h4>
      <p className="text-gray-600 mb-4">{filteredDocs.length} results</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <div key={doc.id} className="w-full">
              <SmallCard
                title={doc.title}
                content={doc.content}
                wordCount={doc.wordCount}
                pageCount={doc.pageCount}
                onClick={() => onDocumentClick(doc)}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center py-10">
            <p className="text-gray-500">No documents found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
