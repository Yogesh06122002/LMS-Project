'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isLogged, setIsLogged] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0, width: '100%',
      padding: '1rem 0',
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      zIndex: 100
    }}>
      <div className="container nav-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700 }} className="text-gradient">
          Career Guru Vision
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
           {menuOpen ? '✕' : '☰'}
        </button>

        {/* Links Array Wrapper */}
        <div className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link href="/" onClick={closeMenu}>Home</Link>
            <Link href="/about" onClick={closeMenu}>About Us</Link>
            <Link href="/courses" onClick={closeMenu}>Courses</Link>
            <Link href="/contact" onClick={closeMenu}>Contact</Link>
          </div>
          
          <div className="nav-auth">
            {isLogged ? (
              <>
                {role === 'ADMIN' && (
                  <Link href="/admin/upload" className="btn btn-secondary" onClick={closeMenu}>
                    Upload Video
                  </Link>
                )}
                <Link href="/dashboard" className="btn btn-secondary" onClick={closeMenu}>
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="btn" style={{ color: 'var(--danger-color)' }}>
                  Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="btn btn-primary" onClick={closeMenu}>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
