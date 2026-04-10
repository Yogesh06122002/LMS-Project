'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    // In a real app we'd verify the token or check an Auth Context
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');
    if (token) {
      setIsLogged(true);
      setRole(userRole);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.href = '/login';
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0, width: '100%',
      padding: '1rem 0',
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      zIndex: 100
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-gradient">
          EduStream App
        </Link>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {isLogged ? (
            <>
              {role === 'ADMIN' && (
                <Link href="/admin/upload" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                  Upload Video
                </Link>
              )}
              <Link href="/dashboard" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem' }}>
                Dashboard
              </Link>
              <button onClick={handleLogout} className="btn" style={{ padding: '0.4rem 1rem', fontSize: '0.9rem', color: 'var(--danger-color)' }}>
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="btn btn-primary" style={{ padding: '0.4rem 1.2rem', fontSize: '0.9rem' }}>
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
