'use client';
import Link from "next/link";
import { useAuth } from "@/app/auth/authContext";
import { useRouter } from 'next/navigation';

export default function Navigation() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-900 hover:text-gray-600">
              Inicio
            </Link>
            <Link href="/dashboard" className="text-gray-900 hover:text-gray-600">
              Dashboard
            </Link>
            <Link href="/projects" className="text-gray-900 hover:text-gray-600">
              Proyectos
            </Link>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="text-gray-900 hover:text-gray-600"
              >
                Cerrar sesión
              </button>
            ) : (
              <Link href="/login" className="text-gray-900 hover:text-gray-600">
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}