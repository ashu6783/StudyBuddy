import React from 'react';
import AnswerCard from '@/components/reusables/AnswerCard';

interface AnswerListProps {
  isSignedIn?: boolean;
}

const answers = [
  {
    name: 'Corey Stanton',
    rating: 4.5,
    reviews: 81,
    timeAgo: '5 years ago',
    avatar: '/person.svg',
    files: ['project1_instruction.pdf', 'document.docx'],
    content: `This document provides an overview of financial accounting principles, including balance sheets and income statements. Written by an expert with practical examples.`,
  },
  {
    name: 'Kierra Septimus',
    rating: 4.5,
    reviews: 81,
    timeAgo: '5 years ago',
    avatar: '/person.svg',
    files: ['project1_instruction.pdf'],
    content: `A detailed guide on preparing financial reports, focusing on accuracy and compliance with accounting standards.`,
  },
];

export default function AnswerList({ isSignedIn = false }: AnswerListProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-6">Answer (2)</h2>
      {answers.map((answer, index) => (
        <AnswerCard
          key={index}
          name={answer.name}
          rating={answer.rating}
          reviews={answer.reviews}
          timeAgo={answer.timeAgo}
          avatar={answer.avatar}
          files={answer.files}
          content={answer.content}
          isSignedIn={isSignedIn}
        />
      ))}
    </div>
  );
}