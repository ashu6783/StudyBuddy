import { Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const DocumentLoader = () => {
  const [loadingText, setLoadingText] = useState('Preparing your document');
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const loadingMessages = [
      'Preparing your document',
      'Processing content',
      'Almost there',
      'Finalizing details'
    ];
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 800);
    
    const messageInterval = setInterval(() => {
      setLoadingText(prev => {
        const currentIndex = loadingMessages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % loadingMessages.length;
        return loadingMessages[nextIndex];
      });
    }, 2000);
    
    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []); // Empty dependency array
  
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-purple-100 to-white">
      <div className="relative">
        <Loader2 className="animate-spin w-16 h-16 text-purple-600" />
        <div className="absolute inset-0 animate-ping rounded-full bg-purple-400 opacity-20" style={{animationDuration: '3s'}}></div>
      </div>
      
      <h2 className="mt-8 text-2xl font-bold text-purple-800">Hang on a moment</h2>
      <p className="mt-2 text-purple-600 text-center max-w-md">
        {loadingText}...
      </p>
      
      <div className="mt-6 w-64 h-3 bg-purple-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-purple-600 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="mt-2 text-sm text-purple-400">{Math.round(progress)}%</p>
    </div>
  );
};

export default DocumentLoader;