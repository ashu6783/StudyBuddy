import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-gradient-to-b from-purple-50 to-white">
      <div className="relative">
        <Loader className="animate-spin w-16 h-16 text-purple-600" />
        <div className="absolute inset-0 animate-ping rounded-full bg-purple-400 opacity-30" style={{animationDuration: '2s'}}></div>
      </div>
      
      <h2 className="mt-8 text-xl font-bold text-purple-800">Loading Content</h2>
      <p className="mt-2 text-purple-600 text-center max-w-md">
        Hold on a moment !
      </p>
      
      <div className="mt-6 w-64 h-2 bg-purple-100 rounded-full overflow-hidden">
        <div className="h-full bg-purple-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;