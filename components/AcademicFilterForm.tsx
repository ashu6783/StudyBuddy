'use client';

import { useState, useEffect } from 'react';
import { CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

import { useTheme } from 'next-themes';
import { MagicCard } from './magicui/magic-card';

interface AcademicFilterFormProps {
  filters: {
    type: string;
    subject: string;
    academicLevel: string;
    wordCount: [number, number];
  };
  onFilterChange: (newFilters: Partial<AcademicFilterFormProps['filters']>) => void;
  onApplyFilters: () => void;
}

export default function AcademicFilterForm({
  filters,
  onFilterChange,
  onApplyFilters,
}: AcademicFilterFormProps) {
  const { theme } = useTheme();
  const [wordCount, setWordCount] = useState<[number, number]>(filters.wordCount);

  useEffect(() => {
    setWordCount(filters.wordCount);
  }, [filters.wordCount]);

  return (
    <MagicCard
      className="relative w-full max-w-md p-6 rounded-3xl bg-white"
      gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
    >
      <CardContent className="p-0 space-y-5">
        <div className="space-y-2">
          <h3 className="text-md font-semibold">Type of work</h3>
          <Select
            defaultValue={filters.type}
            onValueChange={(value) => onFilterChange({ type: value })}
          >
            <SelectTrigger className="w-full h-[60px] rounded-xl bg-gray-50 border-0">
              <SelectValue placeholder="All Project Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Project Types</SelectItem>
              <SelectItem value="essay">Essay</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="project">Project</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">Subject</h3>
          <Select
            defaultValue={filters.subject}
            onValueChange={(value) => onFilterChange({ subject: value })}
          >
            <SelectTrigger className="w-full h-14 rounded-xl bg-gray-50 border-0">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="accounting">Accounting</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="economics">Economics</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">Academic Level</h3>
          <Select
            defaultValue={filters.academicLevel}
            onValueChange={(value) => onFilterChange({ academicLevel: value })}
          >
            <SelectTrigger className="w-full h-14 rounded-xl bg-gray-50 border-0">
              <SelectValue placeholder="Academic Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Academic Level</SelectItem>
              <SelectItem value="undergraduate">Undergraduate</SelectItem>
              <SelectItem value="masters">Masters</SelectItem>
              <SelectItem value="phd">PhD</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <h3 className="text-md font-semibold">Words</h3>
          <div className="pt-5 pb-4">
            <Slider
              value={wordCount}
              min={0}
              max={1000000}
              step={100}
              onValueChange={(value) => {
                if (value.length === 2) {
                  const updated: [number, number] = [value[0], value[1]];
                  setWordCount(updated);
                  onFilterChange({ wordCount: updated });
                }
              }}
            />
          </div>
          <div className="flex gap-3">
            <Input
              type="number"
              value={wordCount[0]}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                const updated: [number, number] = [val, wordCount[1]];
                setWordCount(updated);
                onFilterChange({ wordCount: updated });
              }}
              className="h-14 rounded-xl bg-gray-50 border-0"
              placeholder="From 275"
            />
            <Input
              type="number"
              value={wordCount[1]}
              onChange={(e) => {
                const val = parseInt(e.target.value) || 0;
                const updated: [number, number] = [wordCount[0], val];
                setWordCount(updated);
                onFilterChange({ wordCount: updated });
              }}
              className="h-14 rounded-xl bg-gray-50 border-0"
              placeholder="To 550,000"
            />
          </div>
          <p className="text-sm text-gray-500">1 Page = 275 Words</p>
        </div>

        <Button
          className="w-full h-12 rounded-[100px] bg-[#A414D5] hover:bg-purple-600 text-white"
          onClick={onApplyFilters}
        >
          Apply
        </Button>
      </CardContent>
    </MagicCard>
  );
}
