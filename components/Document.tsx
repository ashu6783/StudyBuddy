import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Props {
  isSignedIn: boolean;
}

export default function DocumentSignupModal({ isSignedIn }: Props) {
  return (
    <div className="relative w-full max-w-[680px] mx-auto bg-white p-4 sm:p-6 rounded-xl border border-blue-200">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-5">
        Document 1
      </h2>

      {/* Document viewer */}
      <div className="relative bg-gray-50 rounded-xl p-3 sm:p-5 h-[360px] sm:h-[480px] md:h-[560px] overflow-hidden">
        {/* Content area (blurred if not signed in) */}
        <div
          className={`absolute inset-0 overflow-y-auto p-3 sm:p-5 text-sm sm:text-base space-y-2 leading-relaxed ${
            !isSignedIn ? 'blur-md' : ''
          }`}
        >
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam at malesuada. Mattis fermentum
            turpis a diam tincidunt orci condimentum. Non est ut scelerisque diam augue consectetur lobortis. Enim
            interdum lacus vel vitae aliquam. Cursus dictum massa lectus faucibus. Pharetra diam tristique eget sagittis
            elementum. Tellus nec in amet elit mi erat lectus pellentesque sed. Quisque suspendisse cursus erat sit
            elementum elementum nullam ultrices ultrices. Massa vel maecenas nunc ipsum vitae tincidunt. Libero quam
            consequat egestas sagittis. Proin pellentesque proin enim in netus ac nulla neque ut.
          </p>
        </div>

        {/* Modal when not signed in */}
        {!isSignedIn && (
          <Card className="absolute inset-0 m-auto w-[90%] max-w-[400px] bg-white shadow-xl rounded-2xl overflow-hidden flex flex-col justify-center items-center p-5 sm:p-8 border-0">
            <CardHeader className="flex flex-col items-center space-y-3 sm:space-y-4 text-center">
              <Image
                src="/Frame.svg"
                width={40}
                height={40}
                alt="clipboard icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                Sign Up To View The Full Document!
              </h3>
            </CardHeader>

            <CardContent className="px-2 sm:px-6">
              <p className="text-gray-500 text-sm sm:text-base text-center mt-2">
                Lorem ipsum dolor sit amet consectetur. Mi nisi sit feugiat fringilla morbi. Egestas vestibulum leo
                cursitor eget a commodo.
              </p>
            </CardContent>

            <CardFooter className="w-full mt-4">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-sm sm:text-base">
                <Image
                  src="/unlock.svg"
                  width={16}
                  height={16}
                  alt="unlock"
                  className="mr-2 w-4 h-4 sm:w-5 sm:h-5"
                />
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>

      {/* Attachments */}
      <div
        className={`flex flex-wrap gap-2 sm:gap-3 mt-4 ${
          !isSignedIn ? 'blur-sm' : ''
        }`}
      >
        {['project1_instruction.pdf', 'document.docx'].map((file, idx) => (
          <div
            key={idx}
            className="flex items-center gap-1 sm:gap-2 px-3 py-1 bg-purple-100 rounded-md max-w-full truncate"
          >
            <Image
              src="/document.svg"
              width={16}
              height={16}
              alt="document icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-xs sm:text-sm text-purple-800 truncate">{file}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
