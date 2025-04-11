'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import { useTheme } from 'next-themes';
import { MagicCard } from '@/components/magicui/magic-card';

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { theme } = useTheme();

  const handleSignUp = () => {
    if (username && password && email) {
      localStorage.setItem('isSignedIn', 'true');
      router.push('/');
    } else {
      setError('Please fill all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center px-4">
      <MagicCard
        gradientColor={theme === 'dark' ? '#5D2EFF' : '#E6CCFF'}
        className="w-full max-w-md p-8 rounded-3xl shadow-xl border-none bg-white dark:bg-zinc-900"
      >
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" width={80} height={80} alt="logo" className="w-20" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />
          <Button
            variant="outline"
            onClick={handleSignUp}
            className="w-full py-3 rounded-xl text-sm"
          >
            Sign Up
          </Button>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/signin" className="text-purple-600 dark:text-purple-400 hover:underline">
            Sign In
          </a>
        </p>
      </MagicCard>
    </div>
  );
}
