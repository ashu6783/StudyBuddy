'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { MagicCard } from '../magicui/magic-card';

type CardVariant = 'default' | 'secondary' | 'destructive' | 'outline' | null | undefined;

interface CustomCardProps {
  title?: string;
  content?: string;
  wordCount?: number;
  pageCount?: number;
  variant?: CardVariant;
  onClick?: () => void;
}

export default function CustomCard({
  title = 'Card Title',
  content = 'Card content goes here.',
  wordCount = 0,
  pageCount = 0,
  variant = 'default',
  onClick,
}: CustomCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  return (
    <Card
      className={`w-full transition-all duration-300 ${
        isHovering ? 'shadow-lg' : 'shadow'
      } p-0 border-none bg-transparent`}
      style={{ transform: isHovering ? 'translateY(-4px)' : 'translateY(0)' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <MagicCard
        gradientColor={theme === 'dark' ? '#B388FF' : '#F3E8FF'}

        className="p-0 rounded-xl overflow-hidden"
      >
        <CardHeader className="p-4">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-0">
          <p className="text-sm font-normal text-muted-foreground">
            {content.length > 120 ? content.substring(0, 120) + '...' : content}
          </p>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex justify-between px-4 pt-0 pb-4">
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <Image src="/pad.svg" fill alt="pad" className="object-contain" />
            </div>
            <span className="text-xs text-muted-foreground">
              Words: <Badge variant={variant}>{wordCount}</Badge>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-4 h-4">
              <Image src="/document.svg" fill alt="document" className="object-contain" />
            </div>
            <span className="text-xs text-muted-foreground">
              Pages: <Badge variant={variant}>{String(pageCount).padStart(2, '0')}</Badge>
            </span>
          </div>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
