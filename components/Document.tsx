import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Props {
    isSignedIn: boolean;
}

export default function DocumentSignupModal({ isSignedIn }: Props) {
    return (
        <div className="relative w-full max-w-[650px] h-auto mx-auto bg-white p-3 sm:p-6 rounded-lg border border-blue-200">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Document 1</h2>

            {/* Document background with blurred text */}
            <div className="relative bg-gray-50 rounded-xl p-3 sm:p-6 h-[400px] sm:h-[500px] md:h-[570px] overflow-hidden">
                {/* Document content, blur only if not signed in */}
                <div className={`absolute inset-0 p-3 sm:p-6 overflow-y-auto space-y-2 sm:space-y-3 text-xs sm:text-sm ${!isSignedIn ? 'blur-lg' : ''}`}>
                    <p className="text-gray-800 leading-5 sm:leading-6">
                        Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam at malesuada. Mattis
                        fermentum turpis a diam tincidunt orci condimentum. Non est ut scelerisque diam augue consectetur
                        lobortis. Enim interdum lacus vel vitae aliquam. Cursus dictum massa lectus faucibus. Pharetra diam
                        tristique eget sagittis elementum. Tellus nec in amet elit mi erat lectus pellentesque sed. Quisque
                        suspendisse cursus erat sit elementum elementum nullam ultrices ultrices. Massa vel maecenas nunc ipsum
                        vitae tincidunt. Libero quam consequat egestas sagittis. Proin pellentesque proin enim in netus ac nulla
                        neque ut.
                    </p>
                </div>

                {/* Modal overlay if not signed in */}
                {!isSignedIn && (
                    <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[400px] bg-white shadow-lg rounded-2xl sm:rounded-3xl overflow-hidden border-0">
                        <CardHeader className="flex flex-col items-center pb-0 pt-4 sm:pt-6 space-y-2 sm:space-y-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <Image src="/Frame.svg" width={36} height={36} alt="clipboard icon" className="w-8 h-8 sm:w-10 sm:h-10" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">Sign Up To View The Full Document!</h3>
                        </CardHeader>
                        <CardContent className="pt-2 px-4 sm:px-8">
                            <p className="text-gray-500 text-center text-xs sm:text-sm mb-4 sm:mb-6">
                                Lorem ipsum dolor sit amet consectetur. Mi nisi sit feugiat fringilla morbi. Egestas vestibulum leo
                                cursitor eget a commodo.
                            </p>
                        </CardContent>
                        <CardFooter className="flex flex-col p-4 sm:p-6 pt-0">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 sm:py-4 rounded-full" size="lg">
                                <Image src="/unlock.svg" width={16} height={16} alt="unlock" className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                                Sign Up
                            </Button>
                        </CardFooter>
                    </Card>
                )}
            </div>

            {/* Attachments */}
            <div className={`flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3 ${!isSignedIn ? 'blur-sm' : ''}`}>
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-100 rounded-md max-w-full truncate">
                    <Image src="/document.svg" width={16} height={16} alt="document icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm text-purple-800 truncate">project1_instruction.pdf</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-purple-100 rounded-md max-w-full truncate">
                    <Image src="/document.svg" width={16} height={16} alt="document icon" className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs sm:text-sm text-purple-800 truncate">document.docx</span>
                </div>
            </div>
        </div>
    );
}