'use client'

import { createContext, useContext, useEffect, useState } from 'react';

type UserContextType = {
  isSignedIn: boolean;
  signOut: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    setIsSignedIn(localStorage.getItem('isSignedIn') === 'true');
  }, []);

  const signOut = () => {
    localStorage.removeItem('isSignedIn');
    setIsSignedIn(false);
  };

  return (
    <UserContext.Provider value={{ isSignedIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};
