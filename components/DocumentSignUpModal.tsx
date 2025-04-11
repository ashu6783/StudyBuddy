'use client';

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';

interface DocumentSignupModalProps {
  isSignedIn: boolean;
  selectedDocument: {
    id: string;
    title: string;
    content: string;
    wordCount: number;
    pageCount: number;
    type: string;
    subject: string;
    academicLevel: string;
    attachments?: string[];
  } | null;
  onClose?: () => void;
}

export default function DocumentSignupModal({
  isSignedIn,
  selectedDocument,
  onClose,
}: DocumentSignupModalProps) {
  const [open, setOpen] = React.useState(false);

  if (!selectedDocument) return null;

  const handleSignUpClick = () => {
    setOpen(false);
    window.location.href = '/signup';
  };

  const handleSignInClick = () => {
    setOpen(false);
    window.location.href = '/signin';
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-xl">
          View Document
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-[550px] md:max-w-[650px] h-auto max-h-[90vh] md:h-auto bg-white p-3 sm:p-6 rounded-lg border border-blue-200">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 truncate">{selectedDocument.title}</h2>
        <div className="relative bg-gray-50 rounded-xl p-3 sm:p-6 h-[60vh] sm:h-[500px] md:h-[570px] overflow-hidden">
          <div
            className={`absolute inset-0 p-3 sm:p-6 overflow-y-auto space-y-3 ${!isSignedIn ? 'blur-lg' : ''
              }`}
          >
            <p className="text-xs sm:text-sm text-gray-800 leading-5 sm:leading-6">
              {selectedDocument.content.substring(0, isSignedIn ? undefined : 100)}...
              {!isSignedIn && ' (Sign up to view the full content)'}
            </p>
          </div>
          {!isSignedIn && (
            <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] bg-white shadow-lg rounded-3xl overflow-hidden border-0">
              <CardHeader className="flex flex-col items-center pb-0 pt-4 sm:pt-6 space-y-2 sm:space-y-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center">
                  <Image src="/Frame.svg" width={36} height={36} alt="clipboard icon" className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center">Sign Up To View The Full Document!</h3>
              </CardHeader>
              <CardContent className="pt-2 px-4 sm:px-8">
                <p className="text-gray-500 text-center text-xs sm:text-sm mb-4 sm:mb-6">
                  Unlock access to expert-written documents and resources.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <Button
                  onClick={handleSignUpClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 sm:py-4 rounded-full text-sm sm:text-base"
                  size="lg"
                >
                  <Image src="/unlock.svg" width={16} height={16} alt="unlock" className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Sign Up
                </Button>
                <Button
                  onClick={handleSignInClick}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-purple-600 py-3 sm:py-4 rounded-full text-sm sm:text-base"
                  size="lg"
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        <div className={`flex flex-wrap gap-2 sm:gap-3 mt-3 sm:mt-4 ${!isSignedIn ? 'blur-sm' : ''}`}>
          {selectedDocument.attachments?.map((attachment, index) => (
            <div key={index} className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-100 rounded-md">
              <Image src="/document.svg" width={16} height={16} alt="document icon" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm text-purple-800 truncate max-w-[150px] sm:max-w-none">{attachment}</span>
            </div>
          )) || (
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-100 rounded-md">
                <Image src="/document.svg" width={16} height={16} alt="document icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm text-purple-800">No attachments</span>
              </div>
            )}
        </div>
        <Button
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
          className="mt-3 sm:mt-4 bg-gray-200 hover:bg-gray-300 text-purple-600 py-2 px-3 sm:px-4 rounded-xl text-sm sm:text-base"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}