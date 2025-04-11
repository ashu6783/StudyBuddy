'use client';

import React, { useEffect, useState } from 'react';
import AnswerCard from '@/components/reusables/AnswerCard';

interface Answer {
  id: string;
  title: string;
  content: string;
  subject: string;
  academicLevel: string;
  type: string;
  wordCount: number;
  pageCount: number;
}

interface AnswerListProps {
  isSignedIn?: boolean;
  subject: string;
}

export default function AnswerList({ isSignedIn = false, subject }: AnswerListProps) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnswers = async () => {
      if (!subject) {
        setLoading(false);
        return;
      }
      
      try {
        setLoading(true);
        console.log(`Fetching answers for subject: ${subject}`);
        
        const res = await fetch(`/api/documents?subject=${encodeURIComponent(subject.toLowerCase())}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch answers: ${res.status}`);
        }
        
        const data = await res.json();
        console.log(`Received ${data.length} answers for subject: ${subject}`);
        setAnswers(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching answers:', error);
        setError('Failed to load related answers. Please try again.');
        setAnswers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswers();
  }, [subject]);

  if (!subject) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-6">Related Answers ({answers.length})</h2>

      {loading ? (
        <p className="text-gray-500">Loading related answers...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : answers.length === 0 ? (
        <p className="text-gray-500">No answers available for {subject}.</p>
      ) : (
        <div className="space-y-10">
          {answers.map((answer, index) => (
            <div key={answer.id} className={index > 0 ? "pt-6 border-t border-gray-200" : ""}>
              <AnswerCard
                name={answer.title}
                rating={4.5}
                reviews={81}
                timeAgo="Recently"
                avatar="/person.svg"
                files={['project_instruction.pdf', 'document.docx']}
                content={answer.content}
                isSignedIn={isSignedIn}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}