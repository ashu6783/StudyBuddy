'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import DocumentSignupModal from '@/components/DocumentSignUpModal';
import AnswerList from '@/components/AnswerList';
import { Button } from '@/components/ui/button';
import { documents } from '@/lib/data';
import Image from 'next/image';

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
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex items-center mb-8">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                        <Image src='/document.svg' width={24} height={24} alt='document'/>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800">Document Details</h2>
                    {isSignedIn && (
                        <Button
                            onClick={handleSignOut}
                            className="ml-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-xl"
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
                {isSignedIn && <AnswerList isSignedIn={isSignedIn} />}
            </div>
        </div>
    );
}
