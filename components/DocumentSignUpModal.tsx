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
      <DialogContent className="w-[650px] h-[700px] bg-white p-6 rounded-lg border border-blue-200">
        <h2 className="text-xl font-bold mb-4">{selectedDocument.title}</h2>
        <div className="relative bg-gray-50 rounded-xl p-6 h-[570px] overflow-hidden">
          <div
            className={`absolute inset-0 p-6 overflow-y-auto space-y-3 ${!isSignedIn ? 'blur-lg' : ''
              }`}
          >
            <p className="text-sm text-gray-800 leading-6">
              {selectedDocument.content.substring(0, isSignedIn ? undefined : 100)}...
              {!isSignedIn && ' (Sign up to view the full content)'}
            </p>
          </div>
          {!isSignedIn && (
            <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white shadow-lg rounded-3xl overflow-hidden border-0">
              <CardHeader className="flex flex-col items-center pb-0 pt-6 space-y-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <Image src="/Frame.svg" width={42} height={42} alt="clipboard icon" />
                </div>
                <h3 className="text-2xl font-bold text-center">Sign Up To View The Full Document!</h3>
              </CardHeader>
              <CardContent className="pt-2 px-8">
                <p className="text-gray-500 text-center text-sm mb-6">
                  Unlock access to expert-written documents and resources.
                </p>
              </CardContent>
              <CardFooter className="flex flex-col p-6 pt-0 space-y-4">
                <Button
                  onClick={handleSignUpClick}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-full"
                  size="lg"
                >
                  <Image src="/unlock.svg" width={20} height={20} alt="unlock" className="mr-2" />
                  Sign Up
                </Button>
                <Button
                  onClick={handleSignInClick}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-purple-600 py-4 rounded-full"
                  size="lg"
                >
                  Sign In
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        <div className={`flex gap-3 mt-4 ${!isSignedIn ? 'blur-sm' : ''}`}>
          {selectedDocument.attachments?.map((attachment, index) => (
            <div key={index} className="flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-md">
              <Image src="/document.svg" width={20} height={20} alt="document icon" />
              <span className="text-sm text-purple-800">{attachment}</span>
            </div>
          )) || (
              <div className="flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-md">
                <Image src="/document.svg" width={20} height={20} alt="document icon" />
                <span className="text-sm text-purple-800">No attachments</span>
              </div>
            )}
        </div>
        <Button
          onClick={() => {
            setOpen(false);
            onClose?.();
          }}
          className="mt-4 bg-gray-200 hover:bg-gray-300 text-purple-600 py-2 px-4 rounded-xl"
        >
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
}