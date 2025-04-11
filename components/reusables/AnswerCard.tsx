'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { MagicCard } from '../magicui/magic-card';

interface AnswerCardProps {
  name: string;
  rating: number;
  reviews: number;
  timeAgo: string;
  avatar: string;
  files: string[];
  content: string;
  isSignedIn?: boolean;
}

export default function AnswerCard({
  name,
  rating,
  reviews,
  timeAgo,
  avatar,
  files,
  content,
  isSignedIn = false,
}: AnswerCardProps) {
  const { theme } = useTheme();

  return (
    <div className="w-full mx-auto">
      <MagicCard
        gradientColor={theme === 'dark' ? '#B388FF' : '#F3E8FF'}
        className="p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl"
      >
        {/* Header with user info and chat button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src={avatar}
              width={36}
              height={36}
              alt="avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover border border-gray-200"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">{name}</p>
              <div className="text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-1 sm:gap-2">
                <Image src="/star.svg" width={14} height={14} alt="star" className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-green-600 font-medium">{rating}</span>
                <span>({reviews})</span>
                <span>• {timeAgo}</span>
              </div>
            </div>
          </div>
          <button className="border border-[#a414d5] text-[#a414d5] px-3 py-1 rounded-full hover:bg-purple-50 text-xs sm:text-sm flex items-center self-start sm:self-auto">
            <Image src="/chat.svg" width={14} height={14} alt="chat" className="mr-1 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4" />
            Chat
          </button>
        </div>

        {/* Content area */}
        <div className={`bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 mt-3 sm:mt-5 rounded-lg sm:rounded-xl transition-all ${!isSignedIn ? 'blur-sm' : ''}`}>
          <p className={`text-xs sm:text-sm leading-5 sm:leading-6 whitespace-pre-wrap ${!isSignedIn ? 'text-gray-400' : 'text-gray-700 dark:text-gray-100'}`}>
            {content}
          </p>
        </div>

        {/* File tags */}
        <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap">
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded text-xs sm:text-sm text-purple-800 dark:text-purple-300"
            >
              <Image src="/document.svg" width={16} height={16} alt="doc" className="w-3 h-3 sm:w-4 sm:h-4" />
              {/* Truncate long filenames */}
              <span className="truncate max-w-24 sm:max-w-36 md:max-w-48">{file}</span>
            </div>
          ))}
        </div>

        {/* Action buttons - now in flex-row layout */}
        <div className="flex flex-row gap-2 sm:gap-3 mt-3 sm:mt-5">
          <Button className="bg-[#a414d5] hover:bg-purple-600 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex-1">
            Plagiarism Check
          </Button>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm flex-1">
            Purchase $50
          </Button>
        </div>
      </MagicCard>
    </div>
  );
}