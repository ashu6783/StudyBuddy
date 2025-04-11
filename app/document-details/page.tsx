'use client';

import { Suspense } from 'react';
import DocumentDetailsPage from '@/components/DocumentDetailsPage';

export default function DocumentDetailsWrapper() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <DocumentDetailsPage />
    </Suspense>
  );
}
