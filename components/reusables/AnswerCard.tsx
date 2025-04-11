'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { BorderBeam } from '../magicui/border-beam';


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
  const { } = useTheme();

  return (
    <Card className="relative w-full overflow-hidden p-4 sm:p-6 rounded-2xl">
      <CardHeader className="p-0 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={avatar}
              width={48}
              height={48}
              alt="avatar"
              className="rounded-full border border-gray-200 w-10 h-10 sm:w-12 sm:h-12 object-cover"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white">{name}</p>
              <div className="text-xs text-gray-500 flex items-center gap-1">
                <Image src="/star.svg" width={14} height={14} alt="star" />
                <span className="text-green-600 font-medium">{rating}</span>
                <span>({reviews})</span>
                <span>• {timeAgo}</span>
              </div>
            </div>
          </div>
          <button className="border border-[#a414d5] text-[#a414d5] px-3 py-1 rounded-full hover:bg-purple-50 text-xs sm:text-sm flex items-center">
            <Image src="/chat.svg" width={14} height={14} alt="chat" className="mr-1 w-4 h-4" />
            Chat
          </button>
        </div>
      </CardHeader>

      <CardContent className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-sm">
        <p className={`whitespace-pre-wrap ${!isSignedIn ? 'blur-sm text-gray-400' : 'text-gray-700 dark:text-gray-100'}`}>
          {content}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded text-xs text-purple-800 dark:text-purple-300"
            >
              <Image src="/document.svg" width={16} height={16} alt="doc" />
              <span className="truncate max-w-[150px]">{file}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-row gap-3 mt-4">
        <Button className="bg-[#a414d5] hover:bg-purple-600 text-white rounded-full px-4 py-2 text-sm flex-1">
          Plagiarism Check
        </Button>
        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-sm flex-1">
          Purchase $50
        </Button>
      </CardFooter>

      
      <BorderBeam
        duration={6}
        delay={3}
        size={800}
        className="from-transparent via-purple-600 to-transparent"
      />
    </Card>
  );
}
