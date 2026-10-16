import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  organization?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('fraud-defense-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUser: User = {
      id: '1',
      email,
      name: email.split('@')[0],
    };
    
    setUser(mockUser);
    localStorage.setItem('fraud-defense-user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      name,
    };
    
    setUser(mockUser);
    localStorage.setItem('fraud-defense-user', JSON.stringify(mockUser));
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('fraud-defense-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
