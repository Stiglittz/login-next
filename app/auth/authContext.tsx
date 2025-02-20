'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Verificar autenticación al cargar
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      // Establecer cookie para el middleware
      document.cookie = 'isAuthenticated=true; path=/';
    }
  }, []);

  const login = async (email: string, password: string) => {
    if (email === 'test@test.com' && password === '123456') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      // Establecer cookie para el middleware
      document.cookie = 'isAuthenticated=true; path=/';
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    // Eliminar cookie
    document.cookie = 'isAuthenticated=false; path=/';
    window.location.href = '/login';
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
}