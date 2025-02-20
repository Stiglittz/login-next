import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('isAuthenticated');
  const isAuthenticated = authCookie?.value === 'true';

  // Verificar si la ruta requiere autenticación
  if (request.nextUrl.pathname.startsWith('/projects')) {
    if (!isAuthenticated) {
      // Redirigir al login y limpiar cookies si no está autenticado
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('isAuthenticated');
      return response;
    }
  }

  // Redirigir a projects si está autenticado y trata de acceder al login
  if (request.nextUrl.pathname === '/login' && isAuthenticated) {
    return NextResponse.redirect(new URL('/projects', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/projects/:path*', '/login']
};