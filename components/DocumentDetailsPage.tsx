'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import DocumentSignupModal from '@/components/DocumentSignUpModal';
import AnswerList from '@/components/AnswerList';
import { Button } from '@/components/ui/button';
import { documents } from '@/lib/data';
import Image from 'next/image';
import DocumentHeader from './DocumentHeader';

export default function DocumentDetailsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const docId = searchParams.get('id');
    const [selectedDocument, setSelectedDocument] = useState<{
        id: string;
        title: string;
        content: string;
        wordCount: number;
        pageCount: number;
        type: string;
        subject: string;
        academicLevel: string;
        attachments?: string[];
    } | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const signedIn = localStorage.getItem('isSignedIn') === 'true';
        setIsSignedIn(signedIn);
        if (docId) {
            const doc = documents.find((d) => d.id === parseInt(docId));
            if (doc) {
                setSelectedDocument({
                    ...doc,
                    id: doc.id.toString(),
                    attachments: [`project${doc.id}_instruction.pdf`, `document${doc.id}.docx`],
                });
            }
        }
        setLoading(false);
    }, [docId]);

    const handleSignOut = () => {
        localStorage.removeItem('isSignedIn');
        setIsSignedIn(false);
        router.push('/');
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    if (!selectedDocument) {
        return <div className="min-h-screen flex items-center justify-center">Document not found</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50" suppressHydrationWarning>
            {/* Place DocumentHeader at the top level */}
            <DocumentHeader documentType={selectedDocument.type} subject={selectedDocument.subject} />

            <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6 md:mb-8">
                    <div className="flex items-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                            <Image src='/document.svg' width={24} height={24} alt='document' className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Document Details</h2>
                    </div>
                    {isSignedIn && (
                        <Button
                            onClick={handleSignOut}
                            className="bg-red-600 hover:bg-red-700 text-white py-1 sm:py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl text-sm w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0"
                        >
                            Sign Out
                        </Button>
                    )}
                </div>
                <DocumentSignupModal
                    isSignedIn={isSignedIn}
                    selectedDocument={selectedDocument}
                    onClose={() => setSelectedDocument(null)}
                />
                {isSignedIn && selectedDocument && (
                    <AnswerList
                        isSignedIn={isSignedIn}
                        subject={selectedDocument.subject} // this is crucial!
                    />
                )}
            </div>
        </div>
    );
}